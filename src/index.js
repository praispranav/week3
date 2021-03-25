import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import "bootstrap-social/bootstrap-social.css"
import "font-awesome/css/font-awesome.min.css"
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux"
import { ConfigureStore } from "./redux/configureStore" 

const store = ConfigureStore();

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
