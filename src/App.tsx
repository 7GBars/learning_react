import React from 'react';

import './App.css';
import { AsyncBatchingTest } from "./examples";
import { Debounce } from "./examples/transitions/debounce/Transitions";

import {SearchWithTransition} from "./examples/transitions/searching";
import {TabPanel} from "@/examples";

function App() {

  return (
    <div className="App">
      <TabPanel onTabChange={(id) => console.log(id)}>
        as
        <TabPanel.Tab tabId={'1'} label={'Test'}>Tab 1</TabPanel.Tab>
        <TabPanel.Tab tabId={'1'} label={'Test'}>Tab 2</TabPanel.Tab>
      </TabPanel>
    </div>
  );
}

export default App;
