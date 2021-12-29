import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {initialValue, MyContext} from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={initialValue.dark}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

