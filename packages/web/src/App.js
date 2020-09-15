import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CORE_CONSTANTS from '@monorepo-local/core/constants';
import { getCurrentTime } from '@monorepo/shared/time';
import CONSTS from '@monorepo/shared/core/src/constants';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {CORE_CONSTANTS.BASE_URL} */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>{getCurrentTime()}</p>

        <p>{CONSTS.BASE_URL}</p>
      </header>
    </div>
  );
}

export default App;
