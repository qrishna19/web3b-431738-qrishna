import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Home from './app/Home';
import {BrowserRouter} from "react-router-dom";
import LandingPage from './landingpage.js';


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}><LandingPage/></BrowserRouter>,
  document.getElementById('root')
);
