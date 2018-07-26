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
/** -- Testing out Redux States
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters,
} from './actions/actions';
import store from './store/store';

if (module.hot) {
  module.hot.accept();
}

// Log the initial state
console.log(store.getState());

// Every time state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Lets see the state change
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening
unsubscribe();
*/

/** Original Code from Tutorial (just basic React)
import React from 'react';
import { render } from 'react-dom';
import MyComponent from './MyComponent';

const MainApp = () => (
  <h1>
    Hello React!
  </h1>
);

// Render the app
render(<MainApp />, document.getElementById('app'));
render(<MyComponent />, document.getElementById('app'));
*/

/** Original Code From Tutorial (just figuring out Webpack)
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
