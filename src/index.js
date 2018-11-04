import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';

import getRoutes from './routes';
import rootReducer from './redux/reducers';

import './index.css';

let middleware = [thunk];

let composeEnhancers = compose;
middleware.push(require('redux-freeze'));
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(getRoutes(store), 
    document.getElementById('root')
);
