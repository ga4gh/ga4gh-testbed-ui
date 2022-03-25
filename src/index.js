import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppClient from './AppClient';
import createEmotionCache from './createEmotionCache';

const cache = createEmotionCache();

ReactDOM.hydrate(
  <React.StrictMode>
    <AppClient cache={cache} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
