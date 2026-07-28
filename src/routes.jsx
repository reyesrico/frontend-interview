/* eslint-disable */
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import Login from './Login';
import Chat from './Chat';

export default (store) => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
