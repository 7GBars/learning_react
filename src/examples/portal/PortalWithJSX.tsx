import React, {useState} from 'react';
import {Button} from "primereact/button";
import {PortalContent} from "@/examples/portal/portalContent";
import {createPortal} from "react-dom";

type TPortalWithJSXProps = {}

export const PortalWithJSX: React.FC<TPortalWithJSXProps> = ({}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button  onClick={() => setOpen(p => !p)}>Open portal modal </Button>
      {open && createPortal(<PortalContent/>, document.body)}
    </>
  );
}
