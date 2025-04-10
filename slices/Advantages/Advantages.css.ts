import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 1,
  paddingTop: 56,
  paddingBottom: 56,
  flexDirection: "column-reverse",

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
      gap: 60,
      paddingTop: 120,
      paddingBottom: 120,
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "auto",
  gap: 32,

  "@media": {
    [breakpoints.desktop]: {
      flex: "0 0 50%",
      gap: 48,
    },
  },
});

export const title = style([
  typography["H2-H3"],
  {
    margin: 0,
  },
]);

export const preview = style({
  maxWidth: "100%",
  backgroundColor: theme.colors["Bg Card-60%"],
  backdropFilter: "blur(40px)",
  padding: 32,
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
});

export const items = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  flexWrap: "wrap",

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
    },
  },
});

export const item = style({
  flex: "1 1 45%",
  minWidth: "45%",
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
});

export const itemContent = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const itemTitle = style([
  typography["H4-H5"],
  {
    margin: 0,
  },
]);

export const itemDescription = style([
  typography["Body/M regular-Body/S regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);

export const itemIcon = style({
  fontSize: 24,
});

export const aciton = style({
  width: "100%",
  marginBottom: 32,

  "@media": {
    [breakpoints.desktop]: {
      width: "max-content",
      marginBottom: 0,
    },
  },
});
