import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-bootstrap'


//bootstrap stuff
// import Bootstrap from '/node_modules/react-bootstrap'
// import'./node_modules/bootstrap/dist/css/bootstrap.css';
// import'./node_modules/bootstrap/dist/css/bootstrap-theme.css';
// import $ from 'jquery';
import Popper from 'popper.js';
// import './bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
