import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./Banner.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import BGImage from "./Bg.png";

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
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div className={styles.root}>
          <div className={styles.content}>
            <h2 className={styles.title}>{slice.primary.title}</h2>
            <p className={styles.description}>{slice.primary.description}</p>
            <Button>{slice.primary.action_text}</Button>
          </div>
          <Image src={BGImage.src} layout="fill" alt="bg" />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
