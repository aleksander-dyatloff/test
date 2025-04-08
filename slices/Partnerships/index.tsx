import { FC, ReactNode } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as styles from "./Partnerships.css";
import Container from "@/components/Container/Container";
import WalletIcon from "@/icons/WalletIcon";
import BriefcaseIcon from "@/icons/BriefcaseIcon";
import ShieldTickIcon from "@/icons/ShieldTickIcon";
import { theme } from "@/styles/theme.css";

/**
 * Props for `Partnerships`.
 */
export type PartnershipsProps = SliceComponentProps<Content.PartnershipsSlice>;

const iconsMap: Record<number, ReactNode> = {
  0: <WalletIcon />,
  1: <BriefcaseIcon />,
  2: <ShieldTickIcon />,
};

const colorsMap: Record<number, string> = {
  0: theme.colors.secondary.Purple,
  1: theme.colors.primary["Green-100"],
  2: theme.colors.secondary.Pink,
};

/**
 * Component for "Partnerships" Slices.
 */
const Partnerships: FC<PartnershipsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <header className={styles.header}>
          <div className={styles.label}>{slice.primary.label}</div>
          <h3 className={styles.title}>
            <PrismicRichText field={slice.primary.title} />
          </h3>
        </header>
        <div className={styles.content}>
          <div className={styles.list}>
            {slice.primary.items.map((item) => (
              <div key={item.item_title} className={styles.item}>
                {item.item_title}
              </div>
            ))}
          </div>
          <div className={styles.cards}>
            {slice.primary.cards.map((card, index) => (
              <div className={styles.card} key={card.card_title}>
                <div
                  className={styles.cardIcon}
                  style={{ color: colorsMap[index] }}
                >
                  {iconsMap[index]}
                </div>
                <h4 className={styles.cardTitle}>{card.card_title}</h4>
                <p className={styles.cardDescription}>
                  {card.card_description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partnerships;
