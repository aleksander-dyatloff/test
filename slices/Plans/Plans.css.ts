import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const wrapper = style({
  marginTop: 52,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  background:
    "linear-gradient(180deg, rgba(36, 18, 54, 0.9) 0%, rgba(36, 18, 54, 0) 100%)",
  borderTopLeftRadius: 64,
  borderTopRightRadius: 64,
  borderBottom: `1px solid ${theme.colors["Stroke-30%"]}`,
  zIndex: 1,
});

export const root = style({
  display: "flex",
  flexDirection: "column",
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 24,
  paddingTop: 124,
  paddingBottom: 48,
});

export const title = style([
  typography.H2,
  {
    margin: 0,
    maxWidth: 650,
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
  alignItems: "center",
});

export const item = style({
  borderRadius: 40,
  backgroundColor: theme.colors["Bg Card-60%"],
  flex: "1 1",
  padding: "48px 40px",
  minHeight: 590,
  display: "flex",
  flexDirection: "column",
});

export const itemActive = style({
  background:
    "linear-gradient(180deg, #3C2152 20.91%, rgba(16, 16, 16, 0.6) 74.63%)",
});

export const itemHeader = style({
  display: "flex",
  gap: 16,
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 24,
});

export const itemTitle = style([
  typography.H4,
  {
    margin: 0,
  },
]);

export const itemDescription = style([
  typography.H5,
  {
    margin: 0,
    marginBottom: 24,
  },
]);

export const itemPrice = style([
  typography.H5,
  { margin: 0, color: theme.colors["White-60%"] },
]);

globalStyle(`${itemPrice} strong`, {
  color: theme.colors.White,
});

export const itemAction = style({
  marginTop: "auto",
  width: "100%",
});

export const itemBenefits = style([
  typography["Body/M regular"],
  {
    margin: 0,
    paddingLeft: 20,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    color: theme.colors["White-60%"],
    marginBottom: 32,
  },
]);

export const footer = style({
  paddingTop: 24,
  display: "flex",
  justifyContent: "center",
  paddingBottom: 124,
});
