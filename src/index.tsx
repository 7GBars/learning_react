import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvidersContainer } from "./providers";

import './index.css';

const mainContainer = document.getElementById('root');

const root = ReactDOM.createRoot(mainContainer as HTMLElement, {
  identifierPrefix: 'test-for-useId'
});

root.render(
    <UserProvidersContainer>
      <App />
    </UserProvidersContainer>
);

// root.unmount(); - может использоваться при микрофронтах

reportWebVitals();
