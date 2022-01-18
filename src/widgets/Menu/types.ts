import { ElementType, ReactElement } from "react";
import { MenuItemsType } from "../../components/MenuItems/types";

export interface LangType {
  code: string;
  language: string;
}

export interface PushedProps {
  isPushed: boolean;
  pushNav: (isPushed: boolean) => void;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  cakePriceUsd?: number;
  currentLang: string;
  langs: LangType[];
  setLang: (lang: LangType) => void;
}

export interface NavProps extends PanelProps {
  linkComponent?: ElementType;
  banner?: ReactElement;
  globalMenu?: ReactElement;
  links: Array<MenuItemsType>;
  activeItem: string;
  activeSubItem: string;
}
