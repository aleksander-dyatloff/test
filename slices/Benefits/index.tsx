import { FC, ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./Benefits.css";
import Button from "@/components/Button/Button";
import SquareIcon from "@/icons/SquareIcon";
import StatusUpIcon from "@/icons/StatusUpIcon";
import ConvertShapeIcon from "@/icons/ConvertShapeIcon";
import { theme } from "@/styles/theme.css";

/**
 * Props for `Benefits`.
 */
export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

const iconsMap: Record<number, ReactNode> = {
  0: <SquareIcon />,
  1: <StatusUpIcon />,
  2: <ConvertShapeIcon />,
};

const colorsMap: Record<number, string> = {
  0: theme.colors.secondary.Purple,
  1: theme.colors.primary["Green-100"],
  2: theme.colors.secondary.Pink,
};

/**
 * Component for "Benefits" Slices.
 */
const Benefits: FC<BenefitsProps> = ({ slice }) => {
  return (
    <section
      id={slice.primary.section_id ?? undefined}
      className={styles.wrapper}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <p className={styles.description}>{slice.primary.description}</p>
        <div className={styles.items}>
          {slice.primary.items.map((item, index) => (
            <div key={item.item_title} className={styles.item}>
              <div
                style={{ color: colorsMap[index] }}
                className={styles.itemIcon}
              >
                {iconsMap[index]}
              </div>
              <h4 className={styles.itemTitle}>{item.item_title}</h4>
              <p className={styles.itemDescription}>{item.item_description}</p>
            </div>
          ))}
        </div>
        <Button variant="outline">{slice.primary.action_text}</Button>
      </Container>
    </section>
  );
};

export default Benefits;
