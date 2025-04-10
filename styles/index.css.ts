import "./fonts.css";
import { globalStyle } from "@vanilla-extract/css";
import { primaryFontName } from "./fonts.css";
import { theme } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
});

globalStyle("html, body", {
  fontFamily: primaryFontName,
  margin: 0,
  padding: 0,
  fontSize: "16px",
  lineHeight: "1.5",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  overflowX: "hidden",
  backgroundColor: theme.colors.Dark,
  color: theme.colors.White,
});

globalStyle("body", {
  paddingTop: 70,
  position: "relative",
});
