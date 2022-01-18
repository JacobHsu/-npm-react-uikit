import { Colors, MediaQueries, Shadows, Radii, ZIndices } from "./types";
import { CardTheme } from "../components/Card/types";
import { NavThemeType } from "../widgets/Menu/theme";

export interface PancakeTheme {
  isDark: boolean;
  colors: Colors;
  card: CardTheme;
  nav: NavThemeType;
  mediaQueries: MediaQueries;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as light } from "./light";

export { lightColors } from "./colors";