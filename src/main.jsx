import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers';
import App from './App';
import './index.css';

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
