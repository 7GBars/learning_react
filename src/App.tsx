import React, { useRef, useState } from 'react';


import './App.css';
import {
  type IWrappedTree, WrappedTree,
  AsyncBatchingTest,
} from "./examples";
import { Debounce } from "./examples/transitions/debounce/Transitions";
import {SearchWithTransition} from "./examples/transitions/searching";
import { treeData } from "./__mocks__/treeData";
import withLogger from "./HOC/withLogger";
import {
  CommentsBlock,
  DeferredValueBigList,
  DeferredValueBigText,
  TransitionWebDevSimplified,
  useEffectWithDepsChangeCheck
} from "./hooks";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import {PortalWithChildren, PortalWithJSX} from "@/examples/portal";
import {PortalContent} from "@/examples/portal/portalContent";
import { ExampleWithOutTransition } from "@/hooks/useTransitions/ReactDocExample";


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
 
      {/*<CommentsBlock />*/}

      <ExampleWithOutTransition />
    </div>
  );
}
export const AppWithLogger = withLogger(App);

