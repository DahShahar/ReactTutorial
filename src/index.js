/* eslint no-underscore-dangle: 0 */
/**
 * index.js
 */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import MyToDoApp from './components/MyToDoApp';

// Get the preloaded state
const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(todoApp, preloadedState);

hydrate(
  <Provider store={store}>
    <MyToDoApp />
  </Provider>,
  document.getElementById('root'),
);
