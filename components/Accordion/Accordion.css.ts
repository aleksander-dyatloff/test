import { style } from "@vanilla-extract/css";

export const root = style({
  overflow: "hidden",
  transitionProperty: "max-height, max-width, opacity",
  transitionDuration: "300ms",
  transitionTimingFunction: "ease",
  willChange: "max-height, max-width",
  opacity: 0,
});

export const isOpen = style({
  opacity: 1,
});
