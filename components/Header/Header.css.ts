import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99,
});

export const container = style({
  height: 70,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const middle = style({
  display: "none",
  justifyContent: "center",
  flex: "1 1",

  "@media": {
    [breakpoints.desktop]: {
      display: "flex",
    },
  },
});

export const end = style({
  display: "flex",
  justifyContent: "flex-end",
  flex: "1 1",
});

export const logoWrapper = style({
  flex: "1 1",
});

export const logo = style({
  display: "flex",
  width: 150,

  "@media": {
    [breakpoints.desktop]: {
      width: 170,
    },
  },
});

export const mobileMenuButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  color: theme.colors.White,
  fontSize: 16,
  padding: 8,
  marginRight: 8,

  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});
