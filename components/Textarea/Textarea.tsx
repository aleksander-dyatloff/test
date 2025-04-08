import classNames from "classnames";
import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from "react";
import * as styles from "./Textarea.css";

const Textarea: FC<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > & {
    label?: string;
  }
> = ({ label, className, ...restProps }) => {
  return (
    <label className={classNames(styles.root, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <textarea className={styles.input} {...restProps} />
    </label>
  );
};

export default Textarea;
