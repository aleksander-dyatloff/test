import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./BrandTrafficRisk.css";
import Button from "@/components/Button/Button";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `BrandTrafficRisk`.
 */
export type BrandTrafficRiskProps =
  SliceComponentProps<Content.BrandTrafficRiskSlice>;

/**
 * Component for "BrandTrafficRisk" Slices.
 */
const BrandTrafficRisk: FC<BrandTrafficRiskProps> = ({ slice }) => {
  return (
    <section
      id={slice.primary.section_id ?? undefined}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>{slice.primary.title}</h2>
            <p className={styles.description}>{slice.primary.description}</p>
          </div>
          <PrismicNextLink field={slice.primary.action} passHref legacyBehavior>
            <Button variant="outline" className={styles.desktopAction}>
              {slice.primary.action.text}
            </Button>
          </PrismicNextLink>
        </div>
        <div className={styles.items}>
          {slice.primary.items.map((item) => (
            <div key={item.item_title} className={styles.item}>
              <div className={styles.itemImage}>
                <PrismicNextImage
                  style={{ width: "100%", height: "auto" }}
                  field={item.item_image}
                />
              </div>
              <h4 className={styles.itemTitle}>{item.item_title}</h4>
              <p className={styles.itemDescription}>{item.item_description}</p>
            </div>
          ))}
        </div>
        <PrismicNextLink field={slice.primary.action} passHref legacyBehavior>
          <Button variant="outline" className={styles.mobileAction}>
            {slice.primary.action.text}
          </Button>
        </PrismicNextLink>
      </Container>
    </section>
  );
};

export default BrandTrafficRisk;
