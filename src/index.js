import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from  'react' ;
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <AppRouter />
  </BrowserRouter>, 
  document.querySelector('#root')
  );

