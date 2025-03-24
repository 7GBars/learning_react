import {FC, PropsWithChildren, ReactElement, ReactNode} from "react";
import { TabContent } from "../TabContent";
import { Tab } from "../Tab";


type TabType = typeof Tab;
type TabContentType = typeof TabContent;

type TabProps = {
  tabId: string;
  label: string;
  children: ReactNode;
};

type TabContentProps = {
  tabId: string;
  children: React.ReactNode;
};


type TabPanelChildren = Array<
  | ReactElement<TabProps, typeof Tab>
  | ReactElement<TabContentProps, typeof TabContent>
>;



export type TTabPanelProps = {
  onTabChange?: (tabId: string) => void;
  children: TabPanelChildren;
};

export type TabPanelComponent = FC<TTabPanelProps> & {
  Tab: typeof Tab;
  TabContent: typeof TabContent;
};