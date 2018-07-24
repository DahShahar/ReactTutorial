/**
 * index.js
 */

import React from 'react';
import { render } from 'react-dom';

import MyComponent from './MyComponent';

if (module.hot) {
  module.hot.accept();
}

const MainApp = () => (
  <h1>
    Hello React!
  </h1>
);

// Render the app
render(<MainApp />, document.getElementById('app'));
render(<MyComponent />, document.getElementById('app'));

/*
import styles from './styles.css';
import { add, subtract } from './module';

if (module.hot) {
  module.hot.accept();
}

const resultA = add(2, 3);
const resultB = subtract(5, 1);

console.log(resultA, resultB);
console.log(styles.localClass);
console.log(styles.globalClass);
console.log(process.env.APP_NAME);
*/
