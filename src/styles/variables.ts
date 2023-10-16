interface PARAMS {
  [key: string]: string;
}

export const GRADIENTS: PARAMS = {
  green: "linear-gradient(90deg, #137E24 0%, #27C840 90.77%)",
  yellow: "linear-gradient(180deg, #F58B28 0%, #F6BD29 100%)",
  red: "linear-gradient(180deg, #C5242A 4.17%, #E24130 100%)",
  blue: "linear-gradient(90deg, #388DAA 0%, #34BBD7 97.55%)"
}

export const COLORS: PARAMS = {
  black: "#050507",
  white: "#fff",
  red: "#C5242A",
  green: "#27C840",
  blue: "#48A1BF",
  disabled: "#999999",
}

export const SIZE = {
  xs: "767",
  md: "1024",
  lg: "1440",
  xl: "2000",
}

export const DEVICE = {
  xs: `(min-width: ${SIZE.xs}px)`,
  md: `(min-width: ${SIZE.md}px)`,
  lg: `(min-width: ${SIZE.lg}px)`,
  xl: `(min-width: ${SIZE.xl}px)`,

  maxxs: `(max-width: ${SIZE.xs}px)`,
  maxmd: `(max-width: ${SIZE.md}px)`,
  maxlg: `(max-width: ${SIZE.lg}px)`,
  maxxl: `(max-width: ${SIZE.xl}px)`,
}
