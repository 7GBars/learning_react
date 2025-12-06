import React, {useRef, useState} from 'react';

import { withLogger } from "@/HOC";
import {
  ButtonWithoutForwardRef, BadRef, Page,
  SimpleUseRef,
  Stopwatch,
  useEffectWithDepsChangeCheck,
  UseImperativeHandleWithDeps
} from "@/hooks";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';



function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [objectValue, setObjectValue] = useState<{name: string}>({name: 'As'});

  useEffectWithDepsChangeCheck((changes: any) => {
    console.log(changes)
  }, {count, text, objectValue});

  const demoRef = useRef<any>(null);

  console.log('App renders');

  return (
    <div className="App">
      <input type={'number'} onChange={(e) => setCount(+e.target.value)} value={count}/>
      <button onClick={() => {
        console.log('demoRef', demoRef);
      }}>log data</button>

    <Page />
      <BadRef/>
    </div>
  );
}
export const AppWithLogger = withLogger(App);

