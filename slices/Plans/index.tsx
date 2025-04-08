import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./Plans.css";
import Button from "@/components/Button/Button";
import classNames from "classnames";

/**
 * Props for `Plans`.
 */
export type PlansProps = SliceComponentProps<Content.PlansSlice>;

/**
 * Component for "Plans" Slices.
 */
const Plans: FC<PlansProps> = ({ slice }) => {
  return (
    <section
      className={styles.wrapper}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.header}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <p className={styles.description}>{slice.primary.description}</p>
        </div>
        <div className={styles.items}>
          {slice.primary.plans.map((plan, index) => (
            <article
              key={plan.plan_title}
              className={classNames(
                styles.item,
                index % 2 !== 0 && styles.itemActive
              )}
            >
              <header className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>{plan.plan_title}</h4>
                <div className={styles.itemPrice}>
                  <PrismicRichText field={plan.plan_price} />
                </div>
              </header>
              <h5 className={styles.itemDescription}>
                {plan.plan_description}
              </h5>
              <ul className={styles.itemBenefits}>
                {plan.plan_benefits_list
                  ?.split(",")
                  .map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
              <Button
                variant={
                  index % 2 !== 0 && styles.itemActive ? undefined : "outline"
                }
                className={styles.itemAction}
              >
                {plan.plan_action_text}
              </Button>
            </article>
          ))}
        </div>
        <div className={styles.footer}>
          <Button variant="link">{slice.primary.action_text}</Button>
        </div>
      </Container>
    </section>
  );
};

export default Plans;
