import { DefaultTheme } from "styled-components";
import { light as lightCard } from "../components/Card/theme";
import { light as lightNav } from "../widgets/Menu/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  card: lightCard,
  nav: lightNav,
};

export default lightTheme;
