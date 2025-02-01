import React from 'react';

import './App.css';
import { AsyncBatchingTest } from "./examples";
import { Transitions } from "./examples/transitions/1/Transitions";

function App() {

  return (
    <div className="App">
      <AsyncBatchingTest/>

      <Transitions/>
    </div>
  );
}

export default App;
