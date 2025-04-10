import breakpoints from "@/styles/breakpoints";
import { theme } from "@/styles/theme.css";
import { typography } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",
  paddingTop: 56,
  paddingBottom: 56,
  zIndex: 1,

  "@media": {
    [breakpoints.desktop]: {
      flexDirection: "row",
      paddingTop: 120,
      paddingBottom: 120,
      gap: 145,
    },
  },
});

export const content = style({
  maxWidth: 440,
});

export const items = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  flex: "0 0 50%",
  marginLeft: "auto",

  "@media": {
    [breakpoints.desktop]: {
      gap: 16,
    },
  },
});

export const item = style({
  borderRadius: 40,
  backdropFilter: "blur(40px)",
  backgroundColor: theme.colors["Bg Card-60%"],
  padding: 24,
  flexDirection: "column",
  display: "flex",
  minHeight: 132,
  gap: 16,

  "@media": {
    [breakpoints.desktop]: {
      gap: 24,
      flexDirection: "row",
      alignItems: "center",
      padding: "28px 32px",
    },
  },
});

export const itemIcon = style({
  borderRadius: "50%",
  flex: "0 0 48px",
  width: 48,
  aspectRatio: "1 / 1",
  boxShadow: `inset 0 0 0 0.5px ${theme.colors["Stroke-30%"]}`,
  backgroundColor: theme.colors["White-10%"],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,

  "@media": {
    [breakpoints.desktop]: {
      flex: "0 0 56px",
      width: 56,
    },
  },
});

export const itemContent = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const itemTitle = style([
  typography["H4-H5"],
  {
    margin: 0,
  },
]);

export const itemDescription = style([
  typography["Body/M regular-Body/S regular"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
  },
]);

export const title = style([
  typography["H2-H3"],
  {
    margin: 0,
    marginBottom: 16,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 24,
      },
    },
  },
]);

export const description = style([
  typography["Body/M medium"],
  {
    margin: 0,
    color: theme.colors["White-60%"],
    marginBottom: 32,

    "@media": {
      [breakpoints.desktop]: {
        marginBottom: 48,
      },
    },
  },
]);

export const desktopAction = style({
  display: "none !important",

  "@media": {
    [breakpoints.desktop]: {
      display: "flex !important",
    },
  },
});

export const mobileAction = style({
  width: "100%",
  marginTop: 32,

  "@media": {
    [breakpoints.desktop]: {
      display: "none !important",
    },
  },
});
