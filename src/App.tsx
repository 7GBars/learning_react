import React, { useState } from 'react';

import { withLogger } from "@/HOC";
import { useEffectWithDepsChangeCheck } from "@/hooks";

import {SectionsContextPage} from "src/learn_react_docs";


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
      <SectionsContextPage />
    </div>
  );
}
export const AppWithLogger = withLogger(App);

