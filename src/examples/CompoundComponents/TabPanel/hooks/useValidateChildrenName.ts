import {Children, isValidElement} from "react";

export const useValidateChildrenName = (children: React.ReactNode) => {

    Children.forEach(children, (child) => {
      if (
        !isValidElement(child) ||
        (child.type as any).displayName !== 'TabPanel.Tab' &&
        (child.type as any).displayName !== 'TabPanel.TabContent'
      ) {
        debugger
        console.error(
          'TabPanel only accepts TabPanel.Tab and TabPanel.TabContent as children'
        );
      }
    });


}