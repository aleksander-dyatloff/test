import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 60,
  paddingTop: 120,
  paddingBottom: 120,
  zIndex: 1,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 48,
  flex: "0 0 50%",
  marginLeft: "auto",
});

export const title = style([
  typography.H2,
  {
    margin: 0,
  },
]);

export const preview = style({
  borderRadius: 40,
  backgroundColor: theme.colors["Bg Card-60%"],
  backdropFilter: "blur(40px)",
  padding: 32,
});

export const items = style({
  display: "flex",
  gap: 24,
  flexWrap: "wrap",
});

export const item = style({
  flex: "1 1 45%",
  minWidth: "45%",
  display: "flex",
  alignItems: "flex-start",
  gap: 16,
});

export const itemContent = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const itemTitle = style([
  typography.H4,
  {
    margin: 0,
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
});
