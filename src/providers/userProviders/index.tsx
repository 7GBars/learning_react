import React, { PropsWithChildren } from 'react';
import { ErrorBoundary } from "../../components/errorBoundary";
import { ErrorPageContent } from "../../components";
import { ThemeProvider } from "@/providers/theme/ThemeProvider";

type TUserProvidersContainerProps = PropsWithChildren<{}>

export const UserProvidersContainer: React.FC<TUserProvidersContainerProps> = ({children}) => {
  return (
    <>
      <ErrorBoundary ErrorComponent={ErrorPageContent}>
        <ThemeProvider defaultThemeName={'light'}>
          {children}
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

