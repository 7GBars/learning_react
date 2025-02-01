import React from 'react';

import './App.css';
import { AsyncBatchingTest } from "./examples";
import { Transitions } from "./examples/transitions/debounce/Transitions";

function App() {

  return (
    <div className="App">
      <AsyncBatchingTest/>

      <Transitions/>
    </div>
  );
}

export default App;
