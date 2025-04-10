import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 56,
  paddingBottom: 56,
  zIndex: 1,

  "@media": {
    [breakpoints.desktop]: {
      paddingTop: 120,
      paddingBottom: 120,
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
  marginBottom: 32,

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: 100,
    },
  },
});

export const label = style([
  typography["Body/S regular"],
  {
    width: "max-content",
    padding: "0 10px",
    minHeight: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    border: `1px solid ${theme.colors["Stroke-30%"]}`,
    backgroundColor: theme.colors["White-10%"],
  },
]);

export const title = style([
  typography.H3,
  {
    maxWidth: 1110,
    textAlign: "center",
    margin: 0,
  },
]);

globalStyle(`${title} *`, {
  margin: 0,
});

globalStyle(`${title} em`, {
  fontStyle: "normal",
  color: theme.colors["White-60%"],
});

export const content = style({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexDirection: "column",

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
      gap: 145,
    },
  },
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  color: theme.colors["White-60%"],
  width: "100%",
  marginBottom: 24,

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: 0,
      marginRight: "auto",
      flex: "1 1",
      width: "auto",
    },
  },
});

export const item = style([
  typography.H5,
  {
    borderTop: `1px solid ${theme.colors["White-10%"]}`,
    padding: "16px 24px",

    ":last-child": {
      borderBottom: `1px solid ${theme.colors["White-10%"]}`,
    },

    "@media": {
      [breakpoints.desktop]: {
        padding: "40px 24px",
      },
    },
  },
]);

export const cards = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: 8,

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
      gap: 16,
      width: "50%",
    },
  },
});

export const card = style({
  backgroundColor: theme.colors["Bg Card-60%"],
  backdropFilter: "blur(40px)",
  padding: 24,
  maskImage: "paint(squircle)",

  vars: {
    "--squircle-smooth": "1",
    "--squircle-radius": "40px",
  },

  selectors: {
    "body[data-no-worklet] &": {
      borderRadius: 40,
    },
  },

  "@media": {
    [breakpoints.desktop]: {
      padding: 32,

      flex: "1 1 45%",
      minWidth: "45%",
    },
  },
});

export const cardIcon = style({
  fontSize: 24,
  aspectRatio: "1 / 1",
  width: 48,
  borderRadius: "50%",
  boxShadow: `inset 0 0 0 0.5px ${theme.colors["Stroke-30%"]}`,
  backgroundColor: theme.colors["White-10%"],
  marginBottom: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: 32,
      width: 56,
    },
  },
});

export const cardTitle = style([
  typography["H4-H5"],
  {
    margin: 0,
    marginBottom: 8,
  },
]);

export const cardDescription = style([
  typography["Body/M regular-Body/S regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);
