import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/Layout/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root')

let render = () =>{
    ReactDOM.render(<App />, rootEl);
}
render()

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
