import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import { AppContainer } from 'react-hot-loader';

import configureStore, { history } from "./src/redux/store";

import './styles/index.scss';


import App from './App';


const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>
  , 
document.getElementById('root'));
