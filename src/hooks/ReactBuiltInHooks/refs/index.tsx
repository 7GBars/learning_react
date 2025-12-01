import React, {useEffect, useRef, useState, type FC, type Ref, forwardRef, useId, useImperativeHandle} from 'react';

import { Button } from "primereact/button";


type TSimpleUseRefProps = {};

const objectLiteralOutComponent = { name: 'ge' };

export const SimpleUseRef: FC<TSimpleUseRefProps> = ({}) => {
  const [count, setCount] = useState(0);

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
      <ForwardRefWrapped ref={refForChildrenComponent} name={'forwardRef'}/>

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


export const Stopwatch: FC<{}> = () => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalIdRef = useRef<number | null>(null);

  let secondPassed = 0;

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    intervalIdRef.current && clearInterval(intervalIdRef.current);
    intervalIdRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 10);

  };

  const handleStop = () => {
    intervalIdRef.current && clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }

  if (now && startTime) {
    secondPassed = (now - startTime) / 1000;
  }


  return <>
    <h1>Time passed: {secondPassed.toFixed(3)}</h1>
    <Button onClick={handleStart}> start</Button>
    <Button onClick={handleStop}> stop</Button>
  </>
}

interface ButtonWithoutForwardRefProps {
  ref?: Ref<HTMLButtonElement>;
  // другие пропсы
  children: React.ReactNode;
  onClick?: () => void;
}

export const ForwardRefWrapped = forwardRef<TRef,TProps>((props, ref) => {
  const id = useId();

  useImperativeHandle(ref, () => {
    return {componentID: id}
  }, [id]);

  return <>ForwardRefExample</>
});

export const ButtonWithoutForwardRef: FC<ButtonWithoutForwardRefProps> = ({ ref, children, onClick }) => {
  return (
      <button ref={ref} onClick={onClick}>
        {children}
      </button>
  );
};

type TProps = { name: string};
type TRef = { componentID: string};



export * from './useImperativeHandle';