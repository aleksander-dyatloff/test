import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  gap: 145,
  paddingTop: 120,
  paddingBottom: 120,
  zIndex: 1,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: 435,
  marginRight: "auto",
});

export const title = style([
  typography.H2,
  {
    margin: 0,
    marginBottom: 24,
  },
]);

export const description = style([
  typography["Body/S regular"],
  {
    margin: 0,
  },
]);

export const items = style({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const accordion = style({
  cursor: "pointer",
  minHeight: 90,
  borderRadius: 24,
  padding: 32,
  backgroundColor: theme.colors["Bg Card-60%"],
  backdropFilter: "blur(40px)",
  display: "flex",
  alignItems: "center",
  gap: 24,
});

export const accordionActive = style({});

export const accordionIndicator = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  transitionProperty: "transform, color",
  transitionDuration: "300ms",
  color: theme.colors["White-60%"],
  transform: "rotateX(180deg)",

  selectors: {
    [`${accordionActive} &`]: {
      color: theme.colors.White,
      transform: "rotateX(0deg)",
    },
  },
});

export const accordionInfo = style({
  display: "flex",
  flexDirection: "column",
});

export const accordionHeader = style([
  typography.H4,
  {
    display: "flex",
    alignItems: "center",
  },
]);

export const accordionContent = style([
  typography["Body/M regular"],
  {
    margin: 0,
    marginTop: 16,
    color: theme.colors["White-60%"],
  },
]);
