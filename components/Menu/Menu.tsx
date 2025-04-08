import { FC } from "react";
import * as styles from "./Menu.css";

interface Props {
  items: {
    label: string;
    url: string;
  }[];
}

const Menu: FC<Props> = ({ items }) => {
  return (
    <nav className={styles.root}>
      {items.map((item) => (
        <a key={item.label} href={item.url} className={styles.link}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
