import React, { useRef, useState } from 'react';
import { Button } from "primereact/button";

import './App.css';
import {
  type IWrappedTree, WrappedTree,
  AsyncBatchingTest,
} from "./examples";
import { Debounce } from "./examples/transitions/debounce/Transitions";
import {SearchWithTransition} from "./examples/transitions/searching";
import { treeData } from "./__mocks__/treeData";
import withLogger from "./HOC/withLogger";
import { useEffectWithDepsChangeCheck } from "./hooks";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import {PortalWithJSX} from "@/examples/portal";


function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [objectValue, setObjectValue] = useState<{name: string}>({name: 'As'});

  useEffectWithDepsChangeCheck((changes: any) => {
    console.log(changes)
  }, {count, text, objectValue});

  const treeRef = useRef<IWrappedTree>(null);
  return (
    <div className="App">
      <PortalWithJSX/>
    </div>
  );
}
export const AppWithLogger = withLogger(App);

