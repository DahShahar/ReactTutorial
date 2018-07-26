/**
 * index.js
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import MyToDoApp from './components/MyToDoApp';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <MyToDoApp />
  </Provider>,
  document.getElementById('app'),
);
