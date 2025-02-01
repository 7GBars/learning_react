import React from 'react';

import './App.css';
import { AsyncBatchingTest } from "./examples";
import { Transitions } from "./examples/transitions/debounce/Transitions";
import {
  Transition1
} from "./examples/transitions/The difference between Actions and regular event handling/Transition1";

function App() {

  return (
    <div className="App">
      <AsyncBatchingTest/>

      <Transition1/>

      <Transitions/>
    </div>
  );
}

export default App;
