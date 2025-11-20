import React, { useEffect, useRef } from 'react';
import { UseImperativeHandle } from "@/hooks/ReactBuiltInHooks/refs/UseImperativeHandle";
import { Button } from "primereact/button";

type TSimpleUseRefProps = {};

const objectLiteralOutComponent = { name: 'ge' };

export const SimpleUseRef: React.FC<TSimpleUseRefProps> = ({}) => {
  const [count, setCount] = React.useState(0);

  const objectLiteralInComponent = { name: 'ge' };

  const simpleRef = useRef(0);
  const objectRef = useRef(objectLiteralInComponent);
  const objectRef2 = useRef(objectLiteralOutComponent);
  const domRef = useRef(null);
  const refForChildrenComponent = useRef(null);


  useEffect(() => {
    console.log('simpleRef', simpleRef);
    console.log('objectRef', objectRef.current === objectLiteralInComponent);
    console.log('objectRef2', objectRef2.current === objectLiteralOutComponent);
    console.log('domRef', domRef);
    console.log('refForChildrenComponent', refForChildrenComponent);
  }, [count]);
  return (
    <>
      <br/>
      <input type={'number'} onChange={(e) => setCount(+e.target.value)} value={count}/>
      <UseImperativeHandle ref={refForChildrenComponent}/>

      <Button onClick={() => {
        console.log('simpleRef', simpleRef);
        console.log('objectRef', objectRef.current === objectLiteralInComponent);
        console.log('objectRef2', objectRef2.current === objectLiteralOutComponent);
        console.log('domRef', domRef);
        console.log('refForChildrenComponent', refForChildrenComponent);
      }}>get refs values</Button>
      <div ref={domRef}>test</div>
    </>
  );
}
