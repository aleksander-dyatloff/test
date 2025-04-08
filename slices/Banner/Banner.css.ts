import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  zIndex: 1,
  background:
    "linear-gradient(153.75deg, #3C2152 30.52%, rgba(16, 16, 16, 0.6) 104.68%)",
  borderRadius: 56,
  minHeight: 460,
  paddingTop: 100,
  paddingBottom: 80,
  overflow: "hidden",
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
  typography.H2,
  {
    maxWidth: 680,
    margin: 0,
    marginBottom: 24,
  },
]);

export const description = style([
  typography["Body/M medium"],
  {
    color: theme.colors["White-60%"],
    maxWidth: 680,
    margin: 0,
    marginBottom: 48,
  },
]);
