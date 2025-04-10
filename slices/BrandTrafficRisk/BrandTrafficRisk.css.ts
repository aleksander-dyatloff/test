import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 32,
  zIndex: 1,
  paddingTop: 56,
  paddingBottom: 56,

  "@media": {
    [breakpoints.desktop]: {
      gap: 48,
      paddingTop: 48,
      paddingBottom: 48,
    },
  },
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexDirection: "column",

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
    },
  },
});

export const headerContent = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  marginRight: 24,

  "@media": {
    [breakpoints.desktop]: {
      gap: 24,
    },
  },
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
  flexWrap: "wrap",
  justifyContent: "center",
  flexDirection: "column",
  gap: 8,

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
      gap: 24,
    },
  },
});

export const item = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  aspectRatio: "1 / 1",
  backgroundColor: theme.colors["Bg Card-60%"],
  borderRadius: 40,
  backdropFilter: "blur(40px)",
  padding: 32,
  textAlign: "center",
  width: "100%",
  flex: "0 0 100%",

  "@media": {
    [breakpoints.desktop]: {
      flex: "1 1 30%",
      minWidth: "30%",
    },
  },
});

export const itemImage = style({
  marginBottom: 32,
  width: 150,

  "@media": {
    [breakpoints.desktop]: {
      width: 245,
    },
  },
});

export const itemTitle = style([
  typography["H4-H5"],
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

export const desktopAction = style({
  display: "none !important",

  "@media": {
    [breakpoints.desktop]: {
      display: "flex !important",
    },
  },
});

export const mobileAction = style({
  "@media": {
    [breakpoints.desktop]: {
      display: "none !important",
    },
  },
});
