import { Colors, MediaQueries, Shadows, Radii, ZIndices } from "./types";
import { CardTheme } from "../components/Card/types";
import { NavTheme } from "../widgets/Menu/types";

export interface PancakeTheme {
  isDark: boolean;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  mediaQueries: MediaQueries;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as light } from "./light";