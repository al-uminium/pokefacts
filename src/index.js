import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Cards.js'
import reportWebVitals from './reportWebVitals';
import "@fontsource/press-start-2p/400.css";

ReactDOM.render(<Card />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
