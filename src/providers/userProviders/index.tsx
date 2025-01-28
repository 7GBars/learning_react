import React, { PropsWithChildren } from 'react';
import { ErrorBoundary } from "../../components/errorBoundary";
import { ErrorPageContent } from "../../components";

type TUserProvidersContainerProps = PropsWithChildren<{}>

export const UserProvidersContainer: React.FC<TUserProvidersContainerProps> = ({children}) => {
  return (
    <>
      <ErrorBoundary ErrorComponent={ErrorPageContent}>
        {children}
      </ErrorBoundary>
    </>
  );
}

