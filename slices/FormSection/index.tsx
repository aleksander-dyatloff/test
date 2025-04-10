import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/Container/Container";
import * as styles from "./FormSection.css";
import { PrismicNextImage } from "@prismicio/next";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";

/**
 * Props for `FormSection`.
 */
export type FormSectionProps = SliceComponentProps<Content.FormSectionSlice>;

/**
 * Component for "FormSection" Slices.
 */
const FormSection: FC<FormSectionProps> = ({ slice }) => {
  return (
    <section
      className={styles.wrapper}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={styles.preview}>
        <PrismicNextImage width={630} field={slice.primary.image} />
      </div>
      <Container className={styles.root}>
        <div className={styles.content}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <p className={styles.description}>{slice.primary.description}</p>
        </div>
        <div className={styles.form}>
          <div className={styles.field}>
            <Input
              label={slice.primary.name_field_label ?? ""}
              placeholder={slice.primary.name_field_placeholder ?? ""}
            />
          </div>
          <div className={styles.field}>
            <Input
              label={slice.primary.email_field_label ?? ""}
              placeholder={slice.primary.email_field_placeholder ?? ""}
            />
          </div>
          <div className={styles.field}>
            <Input
              label={slice.primary.company_name_label ?? ""}
              placeholder={slice.primary.company_name_placeholder ?? ""}
            />
          </div>
          <div className={styles.field}>
            <Input
              label={slice.primary.website_field_label ?? ""}
              placeholder={slice.primary.website_field_placeholder ?? ""}
            />
          </div>
          <div className={styles.field}>
            <Textarea
              label={slice.primary.comment_field_label ?? ""}
              placeholder={slice.primary.comment_field_placeholder ?? ""}
            />
            <Button className={styles.action}>
              {slice.primary.send_action_text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FormSection;
