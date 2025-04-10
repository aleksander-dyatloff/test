import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  background:
    "linear-gradient(180deg, rgba(36, 18, 54, 0.9) 0%, rgba(36, 18, 54, 0) 100%)",
  borderBottom: `1px solid ${theme.colors["Stroke-30%"]}`,
  zIndex: 1,
  paddingTop: 56,
  paddingBottom: 56,

  maskImage: "paint(squircle)",

  vars: {
    "--squircle-smooth": "1",
    "--squircle-radius": "48px",
  },

  selectors: {
    "body[data-no-worklet] &": {
      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
    },
  },

  "@media": {
    [breakpoints.desktop]: {
      paddingTop: 124,
      paddingBottom: 124,

      vars: {
        "--squircle-smooth": "1",
        "--squircle-radius": "64px",
      },

      selectors: {
        "body[data-no-worklet] &": {
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
        },
      },
    },
  },
});

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
});

export const form = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,

  "@media": {
    [breakpoints.desktop]: {
      marginLeft: "auto",
      flex: "0 0 50%",
      gap: 24,
    },
  },
});

export const field = style({
  flex: "1 1 100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 32,

  "@media": {
    [breakpoints.desktop]: {
      flex: "1 1 45%",
      gap: 48,
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
        maxWidth: 430,
      },
    },
  },
]);

export const description = style([
  typography["Body/M regular-Body/S regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
    marginBottom: 32,

    "@media": {
      [breakpoints.desktop]: {
        maxWidth: 320,
      },
    },
  },
]);

export const preview = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  display: "none",

  "@media": {
    [breakpoints.desktop]: {
      display: "block",
    },
  },
});

export const action = style({
  width: "100%",

  "@media": {
    [breakpoints.desktop]: {
      width: "max-content",
    },
  },
});
