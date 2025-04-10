import breakpoints from "@/styles/breakpoints";
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
  borderTopLeftRadius: 48,
  borderTopRightRadius: 48,
  borderBottom: `1px solid ${theme.colors["Stroke-30%"]}`,
  zIndex: 1,

  "@media": {
    [breakpoints.desktop]: {
      borderTopLeftRadius: 64,
      borderTopRightRadius: 64,
    },
  },
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
  paddingTop: 56,
  paddingBottom: 32,
  gap: 16,

  "@media": {
    [breakpoints.desktop]: {
      paddingTop: 124,
      paddingBottom: 48,
      gap: 24,
    },
  },
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
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  marginLeft: "calc((100vw - 343px) / -2)",
  marginRight: "calc((100vw - 343px) / -2)",
  paddingLeft: 16,
  paddingRight: 16,

  "@media": {
    [breakpoints.desktop]: {
      alignItems: "center",
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
});

export const item = style({
  borderRadius: 40,
  backgroundColor: theme.colors["Bg Card-60%"],
  flex: "1 1",
  minWidth: 343,
  display: "flex",
  flexDirection: "column",
  padding: "32px 24px",
  scrollSnapAlign: "center",

  "@media": {
    [breakpoints.desktop]: {
      padding: "48px 40px",
      minHeight: 590,
    },
  },
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

globalStyle(`${itemPrice} *`, {
  margin: 0,
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
  paddingBottom: 56,

  "@media": {
    [breakpoints.desktop]: {
      paddingBottom: 124,
    },
  },
});
