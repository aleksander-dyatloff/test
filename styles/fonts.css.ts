import { globalFontFace } from "@vanilla-extract/css";

export const primaryFontName = "OpenSauceOne";
export const secondaryFontName = "Neue Plak";

globalFontFace(primaryFontName, {
  src: `url('/fonts/OpenSauceOne-Regular.ttf') format('truetype')`,
  fontWeight: "400",
  fontStyle: "normal",
  fontDisplay: "swap",
});
globalFontFace(primaryFontName, {
  src: `url('/fonts/OpenSauceOne-Light.ttf') format('truetype')`,
  fontWeight: "300",
  fontStyle: "normal",
  fontDisplay: "swap",
});
globalFontFace(primaryFontName, {
  src: `url('/fonts/OpenSauceOne-Medium.ttf') format('truetype')`,
  fontWeight: "500",
  fontStyle: "normal",
  fontDisplay: "swap",
});
globalFontFace(primaryFontName, {
  src: `url('/fonts/OpenSauceOne-Bold.ttf') format('truetype')`,
  fontWeight: "700",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(secondaryFontName, {
  src: `url('/fonts/Neue Plak Bold.ttf') format('truetype')`,
  fontWeight: "800",
  fontStyle: "normal",
  fontDisplay: "swap",
});
