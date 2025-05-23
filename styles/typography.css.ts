import { styleVariants } from "@vanilla-extract/css";
import { secondaryFontName } from "./fonts.css";
import breakpoints from "./breakpoints";

export const typography = styleVariants({
  H1: {
    fontSize: 48,
    lineHeight: "100%",
    fontWeight: 800,
    letterSpacing: "0px",

    background:
      "linear-gradient(144.9deg, #FFFFFF 15.52%, rgba(255, 255, 255, 0.3) 73.33%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: 90,
      },
    },
  },
  H2: {
    fontSize: 32,
    lineHeight: "100%",
    fontWeight: 400,
    fontFamily: secondaryFontName,
    letterSpacing: "0px",

    background:
      "linear-gradient(144.9deg, #FFFFFF 15.52%, rgba(255, 255, 255, 0.3) 73.33%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: 56,
        lineHeight: "110%",
      },
    },
  },
  H3: {
    fontSize: 24,
    lineHeight: "100%",
    fontWeight: 600,
    letterSpacing: "0px",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: 32,
        lineHeight: "130%",
      },
    },
  },
  H4: {
    fontSize: 24,
    lineHeight: "100%",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  H5: {
    fontSize: 18,
    lineHeight: "130%",
    fontWeight: 500,
    letterSpacing: "0px",
  },
  "Body/M regular": {
    fontSize: 16,
    lineHeight: "130%",
    fontWeight: 400,
    letterSpacing: "0px",
  },
  "Body/M medium": {
    fontSize: 16,
    lineHeight: "150%",
    fontWeight: 500,
    letterSpacing: "0px",
  },
  "Body/S regular": {
    fontSize: 14,
    lineHeight: "130%",
    fontWeight: 400,
    letterSpacing: "0px",
  },
  "Body/S medium": {
    fontSize: 14,
    lineHeight: "130%",
    fontWeight: 500,
    letterSpacing: "0px",
  },

  "H4-H5": {
    fontSize: 18,
    lineHeight: "130%",
    fontWeight: 500,
    letterSpacing: "0px",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: 24,
        lineHeight: "100%",
        fontWeight: 700,
        letterSpacing: "0px",
      },
    },
  },

  "Body/M regular-Body/S regular": {
    fontSize: 14,
    lineHeight: "130%",
    fontWeight: 400,
    letterSpacing: "0px",

    "@media": {
      [breakpoints.desktop]: {
        fontSize: 16,
        lineHeight: "130%",
        fontWeight: 400,
        letterSpacing: "0px",
      },
    },
  },

  "H2-H3": {
    fontSize: 32,
    lineHeight: "130%",
    fontWeight: 500,

    "@media": {
      [breakpoints.desktop]: {
        fontSize: 56,
        lineHeight: "110%",
        fontWeight: 400,
        fontFamily: secondaryFontName,
        letterSpacing: "0px",

        background:
          "linear-gradient(144.9deg, #FFFFFF 15.52%, rgba(255, 255, 255, 0.3) 73.33%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
      },
    },
  },
});
