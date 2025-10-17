import React, { useState } from 'react';


import {
  RenderPhaseUpdates,
  RecreatingInitialState,
  TooManyRenders,
  SimpleUseReducer,
  TodoListUseReducer
} from "@/hooks";

import { withLogger } from "@/HOC";
import { useEffectWithDepsChangeCheck } from "./hooks";



import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import { FunctionToState } from "@/hooks/ReactBuiltInHooks/stateHooks/useState/FunctionToState";

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
      <TodoListUseReducer />
    </div>
  );
}
export const AppWithLogger = withLogger(App);

