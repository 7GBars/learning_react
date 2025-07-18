import React from 'react';

import './index.scss'
import {Button} from "primereact/button";

export type TPortalContentProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PortalContent: React.FC<TPortalContentProps> = ({setOpen}) => {
  console.log('PortalContent', setOpen)
  return (
    <div className={'portal-content'}>
      <div>as</div>
      <div>Lorem ipsum dolor sit amet, consecteturfam maiores molestias, nihil quo, sunt tempore veniam.</div>
      <div>open portal</div>
      <div>close portal</div>
      <Button
        onClick={() => {setOpen && setOpen(p => !p)}}
      >
        Open or Close portal modal
      </Button>
    </div>
  );
}
