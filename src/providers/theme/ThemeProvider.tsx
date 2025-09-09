import { FC, PropsWithChildren, useMemo, useState } from "react";

import type { TThemeName } from "@/models-view";
import { TProvider } from "@/types";
import { ThemeContext, TThemeContext } from "@/providers/theme/ThemeContext";


type TProps = {
  defaultThemeName: TThemeName;
}


export const ThemeProvider: TProvider<TProps>= ({defaultThemeName, children}) => {
  const [themeName, setThemeName] = useState<TThemeName>(defaultThemeName);

  const memoizedContextValue = useMemo< TThemeContext>(() => {
    const contextValue = { theme: themeName};
    return contextValue;
  }, [defaultThemeName]);

  return <ThemeContext.Provider value={memoizedContextValue}>{children}</ThemeContext.Provider>
}

