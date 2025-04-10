import { FC } from "react";
import * as styles from "./Header.css";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import Link from "next/link";
import MobileMenuIcon from "@/icons/MobileMenuIcon";

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <button className={styles.mobileMenuButton}>
          <MobileMenuIcon />
        </button>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <Logo />
          </Link>
        </div>
        <div className={styles.middle}>
          <Menu
            items={[
              { label: "Solution", url: "" },
              { label: "Advantages", url: "" },
              { label: "White Label", url: "" },
              { label: "Pricing", url: "" },
              { label: "FAQ", url: "" },
            ]}
          />
        </div>
        <div className={styles.end}>
          <Button variant="ghost">Start now</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
