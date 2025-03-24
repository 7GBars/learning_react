import {FC, PropsWithChildren} from "react";
import { TabContent } from "../TabContent";
import { Tab } from "../Tab";

export type TTabPanelProps = PropsWithChildren<{
  onTabChange?: (tabId: string) => void;
}>

export type TabPanelComponent = FC<TTabPanelProps> & {
  Tab: typeof Tab;
  TabContent: typeof TabContent;
};