import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  flexDirection: "column",
  display: "flex",
  justifyContent: "space-between",
  zIndex: 1,
  paddingTop: 56,
  paddingBottom: 56,

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
      gap: 145,
      paddingTop: 120,
      paddingBottom: 120,
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: 32,

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: 0,
      maxWidth: 435,
      marginRight: "auto",
    },
  },
});

export const title = style([
  typography["H2-H3"],
  {
    margin: 0,
    marginBottom: 16,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 24,
      },
    },
  },
]);

export const description = style([
  typography["Body/S regular"],
  {
    margin: 0,
  },
]);

export const items = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,

  "@media": {
    [breakpoints.desktop]: {
      width: "50%",
      gap: 16,
    },
  },
});

export const accordion = style({
  cursor: "pointer",
  minHeight: 90,
  borderRadius: 24,
  backgroundColor: theme.colors["Bg Card-60%"],
  backdropFilter: "blur(40px)",
  display: "flex",
  alignItems: "center",
  gap: 24,
  padding: "18px 24px",

  "@media": {
    [breakpoints.desktop]: {
      padding: 32,
    },
  },
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
  typography["H4-H5"],
  {
    display: "flex",
    alignItems: "center",
  },
]);

export const accordionContent = style([
  typography["Body/M regular-Body/S regular"],
  {
    margin: 0,
    marginTop: 8,
    color: theme.colors["White-60%"],

    "@media": {
      [breakpoints.desktop]: {
        marginTop: 16,
      },
    },
  },
]);
