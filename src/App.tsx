import React from 'react';

import { userData } from "./__mocks__/errors";

import './App.css';

function App() {

  return (
    <div className="App">
      {userData.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Company: {user.company}</p>
          <button onClick={() => console.log(user.name)}>
            More details
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
