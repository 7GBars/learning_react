import {createContext} from "react";

export type TTabsDataContext = {
  activeTab: string;
  setActiveTab: (id: string) => void;
}
export const TabsDataContext = createContext<TTabsDataContext | null>(null);