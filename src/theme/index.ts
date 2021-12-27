import { Colors, MediaQueries } from "./types";
import { CardTheme } from "../components/Card/types";

export interface PancakeTheme {
  isDark: boolean;
  colors: Colors;
  card: CardTheme;
  mediaQueries: MediaQueries;
}

export { default as light } from "./light";