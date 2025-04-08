import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  paddingTop: 124,
  paddingBottom: 124,
  position: "relative",
  background:
    "linear-gradient(180deg, rgba(36, 18, 54, 0.9) 0%, rgba(36, 18, 54, 0) 100%)",
  borderTopLeftRadius: 64,
  borderTopRightRadius: 64,
  borderBottom: `1px solid ${theme.colors["Stroke-30%"]}`,
  zIndex: 1,
});

export const root = style({
  display: "flex",
  alignItems: "flex-start",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
});

export const form = style({
  flex: "0 0 50%",
  display: "flex",
  flexWrap: "wrap",
  gap: 24,
  marginLeft: "auto",
});

export const field = style({
  flex: "1 1 45%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 48,
});

export const title = style([
  typography.H2,
  {
    margin: 0,
    marginBottom: 24,
    maxWidth: 430,
  },
]);

export const description = style([
  typography["Body/M regular"],
  {
    margin: 0,
    maxWidth: 320,
  },
]);

export const preview = style({
  position: "absolute",
  bottom: 0,
  left: 0,
});
