import breakpoints from "@/styles/breakpoints";
import { style } from "@vanilla-extract/css";

export const root = style({
  maxWidth: "375px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 16,
  paddingRight: 16,

  "@media": {
    [breakpoints.desktop]: {
      maxWidth: "1440px",
      paddingLeft: 48,
      paddingRight: 48,
    },
  },
});
