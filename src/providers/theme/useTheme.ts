import { use, useContext } from "react";
import { ThemeContext } from "@/providers/theme/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if(!context) {
    throw new Error('Для использования useTheme необходимо обернуть компонент в ThemeProvider')
  }
  return context;
}

export const getThemeContext = () => {
  const context = use(ThemeContext);

  if(!context) {
    throw new Error('Для использования useTheme необходимо обернуть компонент в ThemeProvider')
  }
  return context;
}