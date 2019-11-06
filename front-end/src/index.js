import React from 'react';
import ReactDOM from 'react-dom';
import App from './applications/Admin/App.jsx';
import "./index.css";
//import * as serviceWorker from './serviceWorker';
/*
This page will be the home page of the entire application
that allows the user to choose which entity they are:
Student or Admin
*/
// For right now, Home page is Admin home page
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
