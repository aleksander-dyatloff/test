import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./HeroSection.css";
import Button from "@/components/Button/Button";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  return (
    <section
      id={slice.primary.section_id ?? undefined}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.content}>
          <h1 className={styles.title}>{slice.primary.title}</h1>
          <p className={styles.description}>{slice.primary.description}</p>
          <Button>{slice.primary.action_text}</Button>
        </div>
        <div className={styles.imageWrapper}>
          <PrismicNextImage
            field={slice.primary.image}
            style={{ width: "100%", height: "auto" }}
          />
          <p className={styles.imageWrapperDescription}>
            {slice.primary.description}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
