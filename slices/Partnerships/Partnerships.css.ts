import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 56,
  paddingBottom: 56,
  zIndex: 1,

  "@media": {
    [breakpoints.desktop]: {
      paddingTop: 120,
      paddingBottom: 120,
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 24,
  marginBottom: 100,
});

export const label = style([
  typography["Body/S regular"],
  {
    width: "max-content",
    padding: "0 10px",
    minHeight: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    border: `1px solid ${theme.colors["Stroke-30%"]}`,
    backgroundColor: theme.colors["White-10%"],
  },
]);

export const title = style([
  typography.H3,
  {
    maxWidth: 1110,
    textAlign: "center",
    margin: 0,
  },
]);

globalStyle(`${title} *`, {
  margin: 0,
});

globalStyle(`${title} em`, {
  fontStyle: "normal",
  color: theme.colors["White-60%"],
});

export const content = style({
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 145,
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  marginRight: "auto",
  color: theme.colors["White-60%"],
  flex: "1 1",
});

export const item = style([
  typography.H5,
  {
    padding: "40px 24px",
    borderTop: `1px solid ${theme.colors["White-10%"]}`,
  },
]);

export const cards = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
  width: "50%",
});

export const card = style({
  borderRadius: 40,
  backgroundColor: theme.colors["Bg Card-60%"],
  backdropFilter: "blur(40px)",
  padding: 32,
  flex: "1 1 45%",
  minWidth: "45%",
});

export const cardIcon = style({
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

export const cardTitle = style([
  typography.H4,
  {
    margin: 0,
    marginBottom: 8,
  },
]);

export const cardDescription = style([
  typography["Body/M regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);
