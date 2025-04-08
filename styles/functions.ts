export const getColor = (color: string, alpha: string | number = 1) => {
  if (alpha !== 1) {
    return `rgba(${color}, ${alpha})`;
  }
  return `rgb(${color})`;
};
