interface PARAMS {
  [key: string]: string | string[]
}

export const GRADIENT_WEBGL: PARAMS = {
  green: ["#27C840", "#137E24", "#209032"],
  yellow: ["#F6BD29", "#F58B28", "#e98526"],
  red: ["#f83622", "#c6373c", "#bd2228"],
  blue: ["#2abddb", "#34BBD7", "#368daa"],
  purple: ["#6967F1", "#3F448F", "#2c3285"],
  gray: ["#E4E4E4", "#787277", "#858585"],
  home: ["#6176e7", "#d07a33", "#b4292a"]
}

export const GRADIENTS: PARAMS = {
  green: "linear-gradient(90deg, #137E24 0%, #27C840 90.77%)",
  yellow: "linear-gradient(90deg, #F58B28 0%, #F6BD29 100%)",
  red: "linear-gradient(90deg, #C5242A 4.17%, #E24130 100%)",
  blue: "linear-gradient(90deg, #388DAA 0%, #34BBD7 97.55%)",
  purple: "linear-gradient(90deg, #3F448F 0%, #6967F1 100%)",
  gray: "linear-gradient(90deg, #787277 0%, #E4E4E4 100%)",
}

export const GRADIENTS_VERTICALS: PARAMS = {
  green: "linear-gradient(180deg, #137E24 0%, #27C840 90.77%)",
  yellow: "linear-gradient(180deg, #F58B28 0%, #F6BD29 100%)",
  red: "linear-gradient(180deg, #C5242A 4.17%, #E24130 100%)",
  blue: "linear-gradient(180deg, #388DAA 0%, #34BBD7 97.55%)",
  purple: "linear-gradient(180deg, #3F448F 0%, #6967F1 100%)",
  gray: "linear-gradient(180deg, #787277 0%, #E4E4E4 100%)",
}

export const COLORS: PARAMS = {
  black: "#050507",
  white: "#fff",
  red: "#C5242A",
  green: "#27C840",
  blue: "#388eab",
  purple: "#3F448F",
  yellow: "#F58B28",
  disabled: "#999999",
  gray: "#858585",
}

export const SIZE = {
  xss: "360",
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

  maxxss: `(max-width: ${SIZE.xss}px)`,
  maxxs: `(max-width: ${SIZE.xs}px)`,
  maxmd: `(max-width: ${SIZE.md}px)`,
  maxlg: `(max-width: ${SIZE.lg}px)`,
  maxxl: `(max-width: ${SIZE.xl}px)`,
}
