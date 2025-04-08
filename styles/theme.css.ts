import { createTheme } from "@vanilla-extract/css";

export const [themeClass, theme] = createTheme({
  colors: {
    Dark: "rgb(15, 7, 29)",
    "Bg Card-60%": "rgba(16, 16, 16, 0.6)",
    White: "rgb(255, 255, 255)",
    "White-60%": "rgba(255, 255, 255, 0.6)",
    "Stroke-30%": "rgba(255, 255, 255, 0.3)",
    "White-10%": "rgba(255, 255, 255, 0.1)",

    primary: {
      "Green-100": "rgb(189, 227, 69)",
      "Green-200": "rgb(148, 185, 31)",
    },

    secondary: {
      Purple: "rgb(138, 150, 254)",
      Pink: "rgb(190, 112, 252)",
      Blue: "rgb(0, 26, 255)",
    },

    gradient: {
      "White Gradient":
        "linear-gradient(144.9deg, #FFFFFF 15.52%, rgba(255, 255, 255, 0.3) 73.33%)",
      "Bg Card Pricing":
        "linear-gradient(180deg, #3C2152 20.91%, rgba(16, 16, 16, 0.6) 74.63%)",
      "Bg Block Pricing":
        "linear-gradient(180deg, rgba(36, 18, 54, 0.9) 0%, rgba(36, 18, 54, 0) 100%)",
    },
  },
});
