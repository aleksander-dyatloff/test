"use client";
import { FC, UIEventHandler, useRef, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./Plans.css";
import Button from "@/components/Button/Button";
import classNames from "classnames";
import BackgroundImage from "./Bg.png";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Plans`.
 */
export type PlansProps = SliceComponentProps<Content.PlansSlice>;

/**
 * Component for "Plans" Slices.
 */
const Plans: FC<PlansProps> = ({ slice }) => {
  const plansRef = useRef<HTMLDivElement>(null);
  const [activePlan, setActivePlan] = useState<number>(0);

  const handleScrollPlans: UIEventHandler = () => {
    if (!plansRef.current) return;

    const plansRect = plansRef.current.getBoundingClientRect();

    const deepElement = document.elementFromPoint(
      plansRect.x + plansRect.width / 2,
      plansRect.y + plansRect.height / 2
    );

    const planElement = deepElement?.closest(`.${styles.item}`);

    if (!planElement) return;

    const planIndex = planElement.getAttribute("data-index");

    if (!planIndex) return;

    setActivePlan(Number(planIndex));
  };

  return (
    <section
      id={slice.primary.section_id ?? undefined}
      className={styles.wrapper}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container className={styles.root}>
        <div className={styles.header}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <p className={styles.description}>{slice.primary.description}</p>
        </div>
        <div className={styles.itemsWrapper}>
          <div
            className={styles.items}
            ref={plansRef}
            onScroll={handleScrollPlans}
          >
            {slice.primary.plans.map((plan, index) => (
              <article
                data-index={index}
                key={plan.plan_title}
                className={classNames(
                  styles.item,
                  index % 2 !== 0 && styles.itemActive
                )}
              >
                {index % 2 !== 0 && (
                  <Image
                    className={styles.planBG}
                    fill
                    src={BackgroundImage.src}
                    alt="bg"
                  />
                )}
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
                <PrismicNextLink
                  field={plan.plan_action}
                  passHref
                  legacyBehavior
                >
                  <Button
                    variant={
                      index % 2 !== 0 && styles.itemActive
                        ? undefined
                        : "outline"
                    }
                    className={styles.itemAction}
                  >
                    {plan.plan_action.text}
                  </Button>
                </PrismicNextLink>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.sliderDots}>
          {slice.primary.plans.map((plan, index) => (
            <div
              key={plan.plan_title}
              className={classNames(styles.sliderDot, {
                [styles.sliderDotActive]: activePlan === index,
              })}
            />
          ))}
        </div>
        <div className={styles.footer}>
          <PrismicNextLink field={slice.primary.action} passHref legacyBehavior>
            <Button variant="link">{slice.primary.action.text}</Button>
          </PrismicNextLink>
        </div>
      </Container>
    </section>
  );
};

export default Plans;
