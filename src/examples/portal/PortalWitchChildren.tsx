import React, {PropsWithChildren, useMemo, useState} from 'react';
import {Button} from "primereact/button";
import {PortalContainer, PortalContent, TPortalContentProps} from "./portalContent";
import {createPortal} from "react-dom";

type TPortalWithChildrenProps = PropsWithChildren<{}>

export const PortalWithChildren: React.FC<TPortalWithChildrenProps> = ({children}) => {
  const [open, setOpen] = useState(false);



  const filtered = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TPortalContentProps> =>
      React.isValidElement(child) && child.type !== typeof PortalContent
  );
  const propedChildren = useMemo(() => {
    return React.cloneElement(filtered[0], {key: 'children-portal__proped', setOpen})
  }, []);


  return (
    <>
      {propedChildren}
      {open && createPortal(<PortalContainer setOpen={setOpen}> {propedChildren} </PortalContainer>, document.body)}
    </>
  );
}
