import React, {PropsWithChildren, useState} from 'react';
import {Button} from "primereact/button";
import {PortalContainer} from "@/examples/portal/portalContent";
import {createPortal} from "react-dom";

type TPortalWithChildrenProps = PropsWithChildren<{}>

export const PortalWithChildren: React.FC<TPortalWithChildrenProps> = ({children}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button  onClick={() => setOpen(p => !p)}>Open portal modal </Button>
      {open && createPortal(<PortalContainer setOpen={setOpen}/>, document.body)}
    </>
  );
}
