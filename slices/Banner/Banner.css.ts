import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  zIndex: 1,
  background:
    "linear-gradient(153.75deg, #3C2152 30.52%, rgba(16, 16, 16, 0.6) 104.68%)",
  overflow: "hidden",
  padding: "48px 16px",
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
      vars: {
        "--squircle-smooth": "1",
        "--squircle-radius": "56px",
      },

      minHeight: 460,
      paddingTop: 100,
      paddingBottom: 80,

      selectors: {
        "body[data-no-worklet] &": {
          borderRadius: 56,
        },
      },
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
  zIndex: 1,
});

export const title = style([
  typography["H2-H3"],
  {
    maxWidth: 680,
    margin: 0,
    marginBottom: 16,
    background: "linear-gradient(122.04deg, #FFFFFF 16.8%, #2F1F8F 128.39%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 24,
      },
    },
  },
]);

export const description = style([
  typography["Body/M regular-Body/S regular"],
  {
    color: theme.colors["White-60%"],
    maxWidth: 680,
    margin: 0,
    marginBottom: 32,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 48,
      },
    },
  },
]);

export const mobileImage = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});

export const desktopImage = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "none",

  "@media": {
    [breakpoints.desktop]: {
      display: "block",
    },
  },
});
