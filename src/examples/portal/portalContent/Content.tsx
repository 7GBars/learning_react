import React from 'react';

import './index.scss'
import {Button} from "primereact/button";

type TPortalContentProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PortalContent: React.FC<TPortalContentProps> = ({setOpen}) => {
  return (
    <div className={'portal-content-container'}>
      <div>as</div>
      <div>Lorem ipsum dolor sit amet, consecteturfam maiores molestias, nihil quo, sunt tempore veniam.</div>
      <div>open portal</div>
      <div>close portal</div>
      <Button  onClick={() => setOpen(p => !p)}>Open portal modal </Button>
    </div>
  );
}
