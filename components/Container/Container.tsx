import { FC, PropsWithChildren } from "react";
import * as styles from "./Container.css";
import classNames from "classnames";

const Container: FC<PropsWithChildren> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={classNames(styles.root, className)} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
