import { FC, ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./Advantages.css";
import Button from "@/components/Button/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import FlashIcon from "@/icons/FlashIcon";
import Setting3Icon from "@/icons/Setting3Icon";
import DocumentTextIcon from "@/icons/DocumentTextIcon";
import TrendUpIcon from "@/icons/TrendUpIcon";
/**
 * Props for `Advantages`.
 */
export type AdvantagesProps = SliceComponentProps<Content.AdvantagesSlice>;

const iconsMap: Record<number, ReactNode> = {
  0: <FlashIcon />,
  1: <Setting3Icon />,
  2: <DocumentTextIcon />,
  3: <TrendUpIcon />,
};

/**
 * Component for "Advantages" Slices.
 */
const Advantages: FC<AdvantagesProps> = ({ slice }) => {
  return (
    <section
      id={slice.primary.section_id ?? undefined}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.preview}>
          <PrismicNextImage
            style={{ width: "100%", height: "auto" }}
            field={slice.primary.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <div className={styles.items}>
            {slice.primary.items.map((item, index) => (
              <div className={styles.item} key={item.item_title}>
                <div className={styles.itemIcon}>{iconsMap[index]}</div>
                <div className={styles.itemContent}>
                  <h4 className={styles.itemTitle}>{item.item_title}</h4>
                  <p className={styles.itemDescription}>
                    {item.item_description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <PrismicNextLink field={slice.primary.action} passHref legacyBehavior>
            <Button variant="outline" className={styles.aciton}>
              {slice.primary.action.text}
            </Button>
          </PrismicNextLink>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
