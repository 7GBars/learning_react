import { useContext } from "react";

import { TabsDataContext } from "./TabsDataContext";

export const useTabsData = () => {
  const context = useContext(TabsDataContext);
  if (!context) {
    throw new Error('Для использования useTabsData необходимо обернуть компонент в TabsDataProvider');
  }
  return context;
}