import { Colors, MediaQueries, Shadows, Radii, ZIndices } from "./types";
import { CardTheme } from "../components/Card/types";
import { NavThemeType } from "../widgets/Menu/theme";
import { ModalTheme } from "../widgets/Modal/types";

export interface PancakeTheme {
  isDark: boolean;
  colors: Colors;
  card: CardTheme;
  nav: NavThemeType;
  modal: ModalTheme;
  mediaQueries: MediaQueries;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as light } from "./light";

export { lightColors } from "./colors";

export * from "./types";