import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import todoApp from '../src/reducers/reducers';
import MyTodoApp from '../src/components/MyToDoApp';

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  handleRender(req, res);
});

function handleRender(req, res) {
  // Create new Redux store instance
  const store = createStore(todoApp);

  // Create a string representation
  const html = renderToString(
    <Provider store={store}>
      <MyTodoApp />
    </Provider>,
  );

  // Get the initial state
  const preloadedState = store.getState();

  // Send the rendered page to client
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>MyTodoApp Static Page </title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="js/bundle.js"></script>
      </body>
    </html>
  `;
}

export default router;
