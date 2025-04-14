import MobileMenuIcon from "@/icons/MobileMenuIcon";
import { HeaderDocumentData, Simplify } from "@/prismicio-types";
import { PrismicDocumentWithoutUID } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { FC } from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import * as styles from "./Header.css";

interface Props {
  data: PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    string
  >;
}

const Header: FC<Props> = ({ data }) => {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <button className={styles.mobileMenuButton}>
          <MobileMenuIcon />
        </button>
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo} title="Home">
            <Logo />
          </Link>
        </div>
        <div className={styles.middle}>
          <nav className={styles.menu}>
            {data.data.menu.map((menuItem) => (
              <PrismicNextLink
                field={menuItem.menu_link}
                key={menuItem.menu_link.text}
                className={styles.link}
              >
                {menuItem.menu_link.text}
              </PrismicNextLink>
            ))}
          </nav>
        </div>
        <div className={styles.end}>
          <PrismicNextLink
            field={data.data.action_link}
            passHref
            legacyBehavior
          >
            <Button variant="ghost">{data.data.action_link.text}</Button>
          </PrismicNextLink>
        </div>
      </Container>
    </header>
  );
};

export default Header;
