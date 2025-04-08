import { FC, PropsWithChildren } from "react";
import * as styles from "./Button.css";
import classNames from "classnames";

interface Props {
  variant?: "primary" | "outline" | "ghost" | "link";
}

const Button: FC<PropsWithChildren<Props>> = ({
  variant = "primary",
  children,
  className,
  ...restProps
}) => {
  return (
    <button
      className={classNames(styles.root, styles.variant[variant], className)}
      {...restProps}
    >
      {children}
      {variant === "ghost" && (
        <svg
          className={styles.indicator}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.75 8C16.75 7.58579 16.4142 7.25 16 7.25H8V8.75H14.1893L7.46967 15.4697L8.53033 16.5303L15.25 9.81066V16H16.75V8Z"
            fill="#BDE345"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
