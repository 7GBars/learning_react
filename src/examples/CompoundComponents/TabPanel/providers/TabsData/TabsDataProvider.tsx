import React, {PropsWithChildren, useState} from 'react';

import { TabsDataContext } from "./TabsDataContext";
import type {TTabPanelProps} from "../../types";

type TTabsContextProviderProps = PropsWithChildren<{
  onTabChange: TTabPanelProps['onTabChange']
}>

export const TabsDataProvider: React.FC<TTabsContextProviderProps> = ({
 onTabChange , children
}) => {
  const [activeTab, setActiveTab] = useState<string>('');

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onTabChange && onTabChange(id);
  }

  return (
    <TabsDataContext.Provider value={{
      activeTab,
      setActiveTab: handleTabChange
    }}>
      {children}
    </TabsDataContext.Provider>
  );
}