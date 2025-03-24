import React from 'react';

import './App.css';

import {TabPanel} from "@/examples";

function App() {

  return (
    <div className="App">
      <TabPanel>
        <TabPanel.Tab tabId={'1'} label={'Tab1'}>Tab1</TabPanel.Tab>
        <TabPanel.Tab tabId={'2'} label={'Tab2'}>Tab2</TabPanel.Tab>
      </TabPanel>
    </div>
  );
}

export default App;
