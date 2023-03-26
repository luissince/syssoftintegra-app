import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

import './assets/css/main.css';
import './assets/css/font-awesome.css';
import './assets/css/sweetalert.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

import './assets/js/bootstrap.js';
import './assets/js/main.js';
import './assets/js/pace.js';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter >
  </Provider>
  // </React.StrictMode>,
)
