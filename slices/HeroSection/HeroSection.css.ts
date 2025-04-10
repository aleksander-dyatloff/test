import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  zIndex: 1,
  paddingTop: 56,
  paddingBottom: 56,

  "@media": {
    [breakpoints.desktop]: {
      gap: 140,
      paddingTop: 48,
      paddingBottom: 48,
    },
  },
});

globalStyle(`${root} > *`, {
  flex: "1 1",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",

  "@media": {
    [breakpoints.desktop]: {},
  },
});

export const title = style([
  typography.H1,
  {
    margin: 0,
    marginBottom: 16,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 60,
      },
    },
  },
]);

export const description = style([
  typography["Body/S regular"],
  {
    marginBottom: 32,
    color: theme.colors["White-60%"],
    paddingRight: 120,

    "@media": {
      [breakpoints.desktop]: {
        display: "none",
      },
    },
  },
]);

export const imageWrapper = style({
  position: "absolute",
  right: -50,
  bottom: 56,
  width: 180,

  "@media": {
    [breakpoints.desktop]: {
      position: "relative",
      width: "auto",
      right: 0,
      bottom: 0,
    },
  },
});

export const imageWrapperDescription = style([
  typography["Body/M medium"],
  {
    display: "none",
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
        display: "block",
        position: "absolute",
        right: 0,
        bottom: 80,
        maxWidth: 330,
        padding: 32,
        backdropFilter: "blur(40px)",
        backgroundColor: theme.colors["Bg Card-60%"],
      },
    },
  },
]);

export const bgImage = style({
  pointerEvents: "none",
  position: "absolute",
  top: 175,
  right: 0,
});
