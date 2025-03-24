import React from 'react';

import type { TabPanelComponent } from './types';
import {TabsDataProvider} from "./providers";
import {Tab} from "./Tab";
import {TabContent} from "./TabContent";

export const TabPanel: TabPanelComponent = ({
  onTabChange, children
}) => {
  return (
    <TabsDataProvider onTabChange={onTabChange}>
      {children}
    </TabsDataProvider>
  );
};

TabPanel.displayName = "TabPanel";
TabPanel.Tab = Tab;
TabPanel.TabContent = TabContent