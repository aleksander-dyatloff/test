"use client";
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./FaqSection.css";
import ArrowIcon from "@/icons/ArrowIcon";
import classNames from "classnames";
import Accordion from "@/components/Accordion/Accordion";

/**
 * Props for `FaqSection`.
 */
export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

/**
 * Component for "FaqSection" Slices.
 */
const FaqSection: FC<FaqSectionProps> = ({ slice }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.content}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <p className={styles.description}>{slice.primary.description}</p>
        </div>
        <div className={styles.items}>
          {slice.primary.items.map((item) => (
            <section
              key={item.item_title}
              className={classNames(styles.accordion, {
                [styles.accordionActive]: item.item_title === activeItem,
              })}
              onClick={() =>
                setActiveItem(
                  activeItem === item.item_title ? null : item.item_title
                )
              }
            >
              <div>
                <div className={styles.accordionHeader}>{item.item_title}</div>
                <Accordion isOpen={activeItem === item.item_title}>
                  <p className={styles.accordionContent}>{item.item_answer}</p>
                </Accordion>
              </div>
              <div className={styles.accordionIndicator}>
                <ArrowIcon />
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
