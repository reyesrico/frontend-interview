import { createRoot } from 'react-dom/client';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import getRoutes from './routes';
import rootReducer from './redux/reducers';

import './index.css';

let middleware = [thunk];

let composeEnhancers = compose;
if (import.meta.env.DEV) {
  middleware.push(require('redux-freeze'));
}
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

const root = createRoot(document.getElementById('root'));
root.render(getRoutes(store));
