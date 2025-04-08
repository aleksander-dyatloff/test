import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const label = style([
  typography["Body/M regular"],
  {
    color: theme.colors["White-60%"],
    opacity: 0.7,
  },
]);

export const input = style([
  typography["Body/M regular"],
  {
    backgroundColor: theme.colors["Bg Card-60%"],
    border: "none",
    padding: "16px 24px",
    height: 106,
    borderRadius: 16,
    width: "100%",
    display: "block",
    outline: "none",
    font: "inherit",
    transitionProperty: "box-shadow, color",
    transitionDuration: "300ms",
    color: theme.colors["White-60%"],
    resize: "none",

    "::placeholder": {
      color: theme.colors["White-60%"],
      opacity: 0.7,
    },

    ":focus": {
      boxShadow: `inset 0 0 0 1px ${theme.colors["Stroke-30%"]}`,
      color: theme.colors.White,
    },
  },
]);
