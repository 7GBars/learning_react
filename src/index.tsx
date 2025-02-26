import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppWithLogger } from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvidersContainer } from "./providers";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement, {
  identifierPrefix: 'test-for-useId'
});

root.render(
    <UserProvidersContainer>
      <AppWithLogger />
    </UserProvidersContainer>
);

// root.unmount(); - может использоваться при микрофронтах


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
