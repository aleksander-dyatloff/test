import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import * as styles from "./Input.css";
import classNames from "classnames";

const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
  }
> = ({ label, className, ...restProps }) => {
  return (
    <label className={classNames(styles.root, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <input className={styles.input} {...restProps} />
    </label>
  );
};

export default Input;
