import React, {PropsWithChildren} from 'react';

import type { UI } from '@/models-view';
import {useTabsData} from "../providers";

type TTabProps = PropsWithChildren<{
  tabId: string;
  label: string;
  disabled?: boolean;
}> & UI.Base

export const Tab: React.FC<TTabProps> = ({
  tabId,
  label,
  disabled,
  children,
  className,
  id
}) => {
  const { activeTab, setActiveTab } = useTabsData();
  return (
    <button
      role="tab"
      className={`tab ${className} ${activeTab === id ? 'active' : ''}`}
      onClick={() => !disabled && setActiveTab(tabId)}
      aria-selected={activeTab === id}
      disabled={disabled}
    >
      {children}
    </button>
  );
}