/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Login from './Login';
import Chat from './Chat';

export default (store) => (
  <Provider store={store}>
    <BrowserRouter>
        <div>
          <Route path="/" component={App} />
        </div>
    </BrowserRouter>
  </Provider>
);
