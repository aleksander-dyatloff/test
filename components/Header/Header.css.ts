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
  display: "flex",
  justifyContent: "center",
  flex: "1 1",
});

export const end = style({
  display: "flex",
  justifyContent: "flex-end",
  flex: "1 1",
});

export const logo = style({
  display: "flex",
  flex: "1 1",
});
