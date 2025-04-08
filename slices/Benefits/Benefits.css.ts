import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  borderBottom: `1px solid ${theme.colors["Stroke-30%"]}`,
});

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 120,
  paddingBottom: 120,
  zIndex: 1,
});

export const description = style([
  typography["Body/M medium"],
  {
    textAlign: "center",
    margin: 0,
    color: theme.colors["White-60%"],
    maxWidth: 450,
    marginBottom: 48,
  },
]);

export const title = style([
  typography.H2,
  {
    textAlign: "center",
    margin: 0,
    maxWidth: 450,
    marginBottom: 24,
  },
]);

export const items = style({
  display: "flex",
  gap: 16,
  marginBottom: 48,
});

export const item = style({
  flex: "1 1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: theme.colors["Bg Card-60%"],
  borderRadius: 40,
  padding: 32,
  backdropFilter: "blur(40px)",
});

export const itemTitle = style([
  typography.H4,
  {
    margin: 0,
    marginBottom: 8,
  },
]);

export const itemDescription = style([
  typography["Body/M regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);

export const itemIcon = style({
  fontSize: 24,
  aspectRatio: "1 / 1",
  width: 56,
  borderRadius: "50%",
  boxShadow: `inset 0 0 0 0.5px ${theme.colors["Stroke-30%"]}`,
  backgroundColor: theme.colors["White-10%"],
  marginBottom: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
