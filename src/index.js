import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render( 
    <React.StrictMode>
        <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider></BrowserRouter>
  </React.StrictMode>,
    document.querySelector('#root')
);