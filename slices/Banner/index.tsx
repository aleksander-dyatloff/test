import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./Banner.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import BGImage from "./Bg.png";
import BGMobileImage from "./Mobile-Bg.png";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner: FC<BannerProps> = ({ slice }) => {
  return (
    <section
      id={slice.primary.section_id ?? undefined}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div className={styles.root}>
          <div className={styles.content}>
            <h2 className={styles.title}>{slice.primary.title}</h2>
            <p className={styles.description}>{slice.primary.description}</p>
            <PrismicNextLink
              field={slice.primary.action}
              passHref
              legacyBehavior
            >
              <Button>{slice.primary.action.text}</Button>
            </PrismicNextLink>
          </div>
          <div className={styles.desktopImage}>
            <Image src={BGImage.src} alt="bg" fill />
          </div>

          <div className={styles.mobileImage}>
            <Image src={BGMobileImage.src} alt="mobile bg" fill />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
