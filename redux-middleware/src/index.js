import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger/src';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
