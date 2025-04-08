import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 48,
  paddingTop: 48,
  paddingBottom: 48,
  zIndex: 1,
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const headerContent = style({
  display: "flex",
  flexDirection: "column",
  gap: 24,
  marginRight: 24,
});

export const title = style([
  typography.H2,
  {
    margin: 0,
  },
]);

export const description = style([
  typography["Body/M medium"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);

export const items = style({
  display: "flex",
  gap: 24,
  flexWrap: "wrap",
  justifyContent: "center",
});

export const item = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: "1 1 30%",
  minWidth: "30%",
  aspectRatio: "1 / 1",
  backgroundColor: theme.colors["Bg Card-60%"],
  borderRadius: 40,
  backdropFilter: "blur(40px)",
  padding: 32,
  textAlign: "center",
});

export const itemImage = style({
  marginBottom: 32,
});

export const itemTitle = style([
  typography.H4,
  {
    margin: 0,
    marginBottom: 8,
    color: theme.colors.White,
  },
]);

export const itemDescription = style([
  typography["Body/M regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);

export const bgImage = style({
  position: "absolute",
  width: "100%",
  left: 0,
  zIndex: -1,
});
