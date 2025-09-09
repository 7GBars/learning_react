import { createContext } from "react";
import type { TThemeName } from "@/models-view";

export type TThemeContext = {
  theme: TThemeName;
}

export const ThemeContext = createContext<TThemeContext | null>(null);
