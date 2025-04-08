import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 145,
  paddingTop: 120,
  paddingBottom: 120,
  zIndex: 1,
});

export const content = style({
  maxWidth: 440,
});

export const items = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  flex: "0 0 50%",
  marginLeft: "auto",
});

export const item = style({
  borderRadius: 40,
  backdropFilter: "blur(40px)",
  backgroundColor: theme.colors["Bg Card-60%"],
  padding: "28px 32px",
  display: "flex",
  gap: 24,
  alignItems: "center",
  minHeight: 132,
});

export const itemIcon = style({
  borderRadius: "50%",
  flex: "0 0 56px",
  minWidth: 56,
  aspectRatio: "1 / 1",
  boxShadow: `inset 0 0 0 0.5px ${theme.colors["Stroke-30%"]}`,
  backgroundColor: theme.colors["White-10%"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
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

export const title = style([
  typography.H2,
  {
    margin: 0,
    marginBottom: 24,
  },
]);

export const description = style([
  typography["Body/M medium"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
    marginBottom: 48,
  },
]);
