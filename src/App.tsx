import React, { useState } from 'react';

import { withLogger } from "@/HOC";
import { SimpleUseRef, Stopwatch, useEffectWithDepsChangeCheck } from "@/hooks";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';



function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [objectValue, setObjectValue] = useState<{name: string}>({name: 'As'});

  useEffectWithDepsChangeCheck((changes: any) => {
    console.log(changes)
  }, {count, text, objectValue});


  return (
    <div className="App">
      <input type={'number'} onChange={(e) => setCount(+e.target.value)} value={count}/>
      <Stopwatch />
    </div>
  );
}
export const AppWithLogger = withLogger(App);

