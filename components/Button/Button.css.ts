import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const root = style({
  border: "none",
  backgroundColor: "transparent",
  padding: "6px 24px",
  minHeight: 48,
  borderRadius: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  font: "inherit",
  gap: 8,
  minWidth: 140,
  cursor: "pointer",
  transitionProperty: "background-color, color, box-shadow, border-color",
  transitionDuration: "0.2s",
  whiteSpace: "nowrap",

  "@media": {
    [breakpoints.desktop]: {
      minHeight: 56,
      padding: "12px 24px",
    },
  },
});

export const variant = styleVariants({
  primary: [
    typography["Body/M medium"],
    {
      boxShadow: "4px 4px 16px 0px rgba(255, 255, 255, 0.44) inset",

      backgroundColor: theme.colors.primary["Green-100"],
      color: theme.colors.Dark,

      selectors: {
        [`&:hover, &:focus`]: {
          backgroundColor: theme.colors.primary["Green-200"],
        },
      },
    },
  ],
  outline: [
    typography["Body/M medium"],
    {
      backgroundColor: "transparent",
      color: theme.colors.White,
      border: `1px solid ${theme.colors.White}`,

      selectors: {
        [`&:hover, &:focus`]: {
          backgroundColor: theme.colors["White-10%"],
          boxShadow: "4px 4px 16px 0px rgba(255, 255, 255, 0.44) inset",
          borderColor: theme.colors["Stroke-30%"],
        },
      },
    },
  ],
  ghost: {
    backgroundColor: "transparent",
    color: theme.colors.White,
    padding: 0,
    minWidth: "auto",

    selectors: {
      [`&:hover, &:focus`]: {
        color: theme.colors["White-60%"],
      },
    },
  },
  link: {
    color: theme.colors["White-60%"],
    textDecoration: "underline",
    padding: 0,
    minHeight: "auto",
    minWidth: "auto",

    selectors: {
      [`&:hover, &:focus`]: {
        color: theme.colors.White,
      },
    },
  },
});

export const indicator = style({
  flex: "0 0 24px",
  aspectRatio: "1 / 1",
  transitionProperty: "transform",
  transitionDuration: "0.2s",

  selectors: {
    [`${variant.ghost}:hover &, ${variant.ghost}:focus &`]: {
      transform: "scale(1.2)",
    },
  },
});
