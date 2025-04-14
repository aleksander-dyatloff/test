import classNames from "classnames";
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as styles from "./Accordion.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  direction?: "vertical" | "horizontal";
  duration?: number;
  shouldUnmountChild?: boolean;
}

const Accordion: FC<PropsWithChildren<Props>> = ({
  isOpen,
  children,
  className,
  duration = 300,
  direction = "vertical",
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useLayoutEffect(() => {
    const target = ref.current;

    if (!target) return;

    const handleClose = () => {
      if (direction === "vertical") {
        const newValue =
          getComputedStyle(target).minHeight !== "auto"
            ? getComputedStyle(target).minHeight
            : "0px";

        target.style.maxHeight = newValue;
      } else {
        const newValue =
          getComputedStyle(target).minWidth !== "auto"
            ? getComputedStyle(target).minHeight
            : "0px";

        target.style.maxWidth = newValue;
      }
    };

    if (isFirstRender) {
      setIsFirstRender(false);

      if (!isOpen) handleClose();

      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timeoutId: any;

    if (isOpen) {
      if (direction === "vertical") {
        target.style.maxHeight = getComputedStyle(target).minHeight ?? "0px";
      } else {
        target.style.maxWidth = getComputedStyle(target).minWidth ?? "0px";
      }

      setTimeout(() => {
        if (direction === "vertical") {
          target.style.maxHeight = `${target.scrollHeight}px`;
        } else {
          target.style.maxWidth = `${target.scrollWidth}px`;
        }
      }, 10);

      timeoutId = setTimeout(() => {
        if (direction === "vertical") {
          target.style.removeProperty("max-height");
        } else {
          target.style.removeProperty("max-width");
        }
      }, duration);
    } else {
      if (direction === "vertical") {
        target.style.maxHeight = `${target.clientHeight}px`;
      } else {
        target.style.maxWidth = `${target.clientWidth}px`;
      }

      setTimeout(handleClose, 10);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen, direction, duration, isFirstRender]);

  return (
    <div
      className={classNames(styles.root, className, {
        [styles.isOpen]: isOpen,
      })}
      style={{
        transitionDuration: duration + "ms",
      }}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Accordion;
