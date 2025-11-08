import {useCallback, useContext} from "react";

import type {TLevel} from "@/models-view";

import {HeadingContext} from "./HeadingContext";


export const useHeading = (id: string, level: TLevel, throwIfContextNotFound: boolean = true) => {
  const context = useContext(HeadingContext);


  if (!context && throwIfContextNotFound) {
    throw new Error('Для использования useHeading необходимо обернуть компонент в HeadingProvider');
  } else if (!context) {
    console.warn('Для использования useHeading необходимо обернуть компонент в HeadingProvider')
    return null;
  }

  const setSelectedHeading = useCallback(() => {
    context?.setSelectedHeading({id, level})
  }, []);

  return { currentHeader: context.selectedHeading, setSelectedHeading };
}
