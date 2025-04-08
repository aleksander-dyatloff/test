import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  gap: 140,
  paddingTop: 48,
  paddingBottom: 48,
  zIndex: 1,
});

globalStyle(`${root} > *`, {
  flex: "1 1",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const title = style([
  typography.H1,
  {
    margin: 0,
    marginBottom: 60,
  },
]);

export const imageWrapper = style({
  position: "relative",
});

export const description = style([
  typography["Body/M medium"],
  {
    position: "absolute",
    right: 0,
    bottom: 80,
    maxWidth: 330,
    padding: 32,
    backdropFilter: "blur(40px)",
    backgroundColor: theme.colors["Bg Card-60%"],
    borderRadius: 40,
  },
]);

export const bgImage = style({
  pointerEvents: "none",
  position: "absolute",
  top: 175,
  right: 0,
});
