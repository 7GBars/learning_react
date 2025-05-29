import React, {PropsWithChildren} from 'react';

import type { UI } from '@/models-view';
import {useTabsData} from "../providers";

type TTabContentProps = PropsWithChildren<{
  tabId: string;
}> & UI.Base

export const TabContent: React.FC<TTabContentProps> = ({
                                           tabId,
                                           children,
                                           className,
                                           id
                                         }) => {
  const { activeTab } = useTabsData();
  const isActiveTab = activeTab === id;

  return<div role="tabpanel" className="tab-panel" style={{display: isActiveTab ? 'block' : 'none' }}>
      {children}
    </div>

}