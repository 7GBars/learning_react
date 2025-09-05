import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppWithLogger } from './App';

import { UserProvidersContainer } from "./providers";

import './index.css';

const mainContainer = document.getElementById('root');

const root = ReactDOM.createRoot(mainContainer as HTMLElement, {
  identifierPrefix: 'test-for-useId'
});

root.render(
    <UserProvidersContainer>
      <AppWithLogger />
    </UserProvidersContainer>
);

// root.unmount(); - может использоваться при микрофронтах


