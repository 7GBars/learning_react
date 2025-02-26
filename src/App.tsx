import React, { useRef } from 'react';

import './App.css';
import {
  type IWrappedTree, WrappedTree,
  AsyncBatchingTest,
} from "./examples";
import { Debounce } from "./examples/transitions/debounce/Transitions";

import {SearchWithTransition} from "./examples/transitions/searching";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { treeData } from "./__mocks__/treeData";
import withLogger from "./HOC/withLogger";


function App() {
  const treeRef = useRef<IWrappedTree>(null);
  return (
    <div className="App">
      <AsyncBatchingTest/>
      <Debounce/>
      <SearchWithTransition/>
      <WrappedTree ref={treeRef} value={treeData}/>

      <Button onClick={() => {
        treeRef.current?.customMethod()

      }}>get ref</Button>
    </div>
  );
}
export const AppWithLogger = withLogger(App);

