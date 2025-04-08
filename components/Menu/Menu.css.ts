import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style([
  typography["Body/S regular"],
  {
    height: 38,
    borderRadius: 100,
    padding: "0 4px",
    display: "flex",
    backdropFilter: "blur(40px)",
    backgroundColor: theme.colors["White-10%"],
    color: theme.colors["White-60%"],
    whiteSpace: "nowrap",
  },
]);

export const link = style({
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: "0 20px",
  transitionProperty: "color",
  transitionDuration: "0.2s",

  selectors: {
    [`&:hover, &:focus`]: {
      color: theme.colors.White,
      outline: "none",
    },
  },
});
