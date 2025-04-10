import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  "@media": {
    [breakpoints.desktop]: {
      borderBottom: `1px solid ${theme.colors["Stroke-30%"]}`,
    },
  },
});

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

export const description = style([
  typography["Body/M medium"],
  {
    textAlign: "center",
    margin: 0,
    color: theme.colors["White-60%"],
    maxWidth: 450,
    marginBottom: 32,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 48,
      },
    },
  },
]);

export const title = style([
  typography["H2-H3"],
  {
    textAlign: "center",
    margin: 0,
    maxWidth: 450,
    marginBottom: 16,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 24,
      },
    },
  },
]);

export const items = style({
  display: "flex",
  gap: 8,
  marginBottom: 32,
  flexDirection: "column",

  "@media": {
    [breakpoints.desktop]: {
      marginBottom: 48,
      gap: 16,
      flexDirection: "row",
    },
  },
});

export const item = style({
  flex: "1 1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: theme.colors["Bg Card-60%"],
  padding: 24,
  backdropFilter: "blur(40px)",
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
    },
  },
});

export const itemTitle = style([
  typography["H4-H5"],
  {
    margin: 0,
    marginBottom: 8,
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
