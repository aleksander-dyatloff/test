export const breakpointValues = {
  sm: 375,
  md: 768,
  lg: 1440,
  xl: 1920,
} as const;

const breakpoints = {
  mobile: `screen and (min-width: ${breakpointValues.sm}px)`,
  desktop: `screen and (min-width: ${breakpointValues.lg}px)`,
} as const;

export default breakpoints;
