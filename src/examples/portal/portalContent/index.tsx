import React, {PropsWithChildren} from 'react';

import './index.scss'
import {Button} from "primereact/button";


type TPortalContainerProps = PropsWithChildren<{
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}>

export const PortalContainer: React.FC<TPortalContainerProps> = ({children, setOpen}) => {
  return (
    <div className={'portal-content-container'}>
      {children}
      {/*<Button  onClick={() => setOpen && setOpen(p => !p)}>Open portal modal </Button>*/}
    </div>
  );
}

export * from "./Content";
