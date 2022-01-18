import { HTMLAttributes } from "react";

import { Colors } from "../../theme/types";

export interface CardRibbonProps {
  variantColor?: keyof Colors;
  text: string;
  ribbonPosition?: "right" | "left";
}

export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
  cardHeaderBackground: {
    default: string;
    blue: string;
    bubblegum: string;
    violet: string;
  };
  dropShadow: string;
};


