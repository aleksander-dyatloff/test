import { FC, ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./SolutionSection.css";
import Button from "@/components/Button/Button";
import GlobalSearchIcon from "@/icons/GlobalSearchIcon";
import LayerIcon from "@/icons/LayerIcon";
import RankingIcon from "@/icons/RankingIcon";
import { theme } from "@/styles/theme.css";
/**
 * Props for `SolutionSection`.
 */
export type SolutionSectionProps =
  SliceComponentProps<Content.SolutionSectionSlice>;

const iconsMap: Record<number, ReactNode> = {
  0: <GlobalSearchIcon />,
  1: <LayerIcon />,
  2: <RankingIcon />,
};

const colorsMap: Record<number, string> = {
  0: theme.colors.secondary.Purple,
  1: theme.colors.primary["Green-100"],
  2: theme.colors.secondary.Pink,
};

/**
 * Component for "SolutionSection" Slices.
 */
const SolutionSection: FC<SolutionSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.content}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <p className={styles.description}>{slice.primary.description}</p>
          <Button variant="outline">{slice.primary.action_text}</Button>
        </div>
        <div className={styles.items}>
          {slice.primary.items.map((item, index) => (
            <div className={styles.item} key={item.item_title}>
              <div
                style={{ color: colorsMap[index] }}
                className={styles.itemIcon}
              >
                {iconsMap[index]}
              </div>
              <div className={styles.itemContent}>
                <h4 className={styles.itemTitle}>{item.item_title}</h4>
                <p className={styles.itemDescription}>
                  {item.item_description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionSection;
