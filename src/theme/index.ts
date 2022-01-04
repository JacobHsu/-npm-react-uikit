import { Colors, MediaQueries } from "./types";
import { CardTheme } from "../components/Card/types";
import { NavTheme } from "../widgets/Menu/types";

export interface PancakeTheme {
  isDark: boolean;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  mediaQueries: MediaQueries;
}

export { default as light } from "./light";