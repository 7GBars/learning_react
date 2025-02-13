import React from 'react';

import './App.css';
import { AsyncBatchingTest } from "./examples";
import { Debounce } from "./examples/transitions/debounce/Transitions";

import {SearchWithTransition} from "./examples/transitions/searching";

function App() {

  return (
    <div className="App">
      <AsyncBatchingTest/>
      <Debounce/>
      <SearchWithTransition/>
    </div>
  );
}

export default App;
