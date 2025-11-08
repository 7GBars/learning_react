import React, {PropsWithChildren, useMemo} from 'react';
import {SelectedHeading} from "@/hooks/useContext/types";
import {HeadingContext} from "@/hooks/useContext/HeadingContext";

type THeadingProviderProps = PropsWithChildren<{
  defaultSelectedHeading?: SelectedHeading;
}>;

export const HeadingProvider: React.FC<THeadingProviderProps> = ({children, defaultSelectedHeading}) => {
  defaultSelectedHeading ??= null;
  const [selectedHeading, setSelectedHeading] = React.useState<SelectedHeading>(defaultSelectedHeading);

  /** если требуется мемоизация **/
  // const memoizedContextValue = useMemo(() => {
  //   return { selectedHeading, setSelectedHeading };
  // }, [selectedHeading])

  return (
    <HeadingContext value={{ selectedHeading, setSelectedHeading }}>{children}</HeadingContext>
  );
}
