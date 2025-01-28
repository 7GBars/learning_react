import React, { PropsWithChildren } from 'react';
import { ErrorBoundary } from "../../components/errorBoundary";
import { ErrorMsg } from "../../components";

type TUserProvidersContainerProps = PropsWithChildren<{}>

export const UserProvidersContainer: React.FC<TUserProvidersContainerProps> = ({children}) => {
  return (
    <>
      <ErrorBoundary ErrorComponent={ErrorMsg}>
        {children}
      </ErrorBoundary>
    </>
  );
}

