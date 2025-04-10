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

export const itemsWrapper = style({
  overflow: "hidden",
  marginLeft: "calc((100vw - 343px) / -2)",
  marginRight: "calc((100vw - 343px) / -2)",
  height: 632,

  "@media": {
    [breakpoints.desktop]: {
      overflow: "auto",
      marginLeft: 0,
      marginRight: 0,
      height: "auto",
    },
  },
});

export const items = style({
  display: "flex",
  gap: 8,
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  paddingLeft: "calc((100vw - 343px) / 2)",
  paddingRight: "calc((100vw - 343px) / 2)",
  paddingBottom: 16,

  "@media": {
    [breakpoints.desktop]: {
      alignItems: "center",
      paddingLeft: 0,
      paddingRight: 0,
      gap: 24,
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
    gap: 8,
    color: theme.colors["White-60%"],
    marginBottom: 32,

    "@media": {
      [breakpoints.desktop]: {
        gap: 16,
      },
    },
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

export const sliderDots = style({
  paddingTop: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,

  "@media": {
    [breakpoints.desktop]: {
      display: "none",
    },
  },
});

export const sliderDot = style({
  height: 8,
  borderRadius: 8,
  width: 16,
  backgroundColor: theme.colors["White-10%"],
  transitionProperty: "width, background-color",
  transitionDuration: "200ms",
});

export const sliderDotActive = style({
  width: 32,
  backgroundColor: theme.colors.White,
});
