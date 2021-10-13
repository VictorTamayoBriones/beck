import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Favicon from './assets/images/Favicon.png';

ReactDOM.render(
  <>
    <Helmet>
      <link rel="icon" href={ Favicon } />
    </Helmet>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
