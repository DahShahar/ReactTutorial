import { combineReducers } from 'redux';

import {
  updateObject,
  updateItemInArray,
  createReducer,
  sortArray,
} from './utility';

import {
  VisibilityFilters,
  SortFilters,
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;
const { SORT_DESC, SORT_ASC } = SortFilters;

function setVisibilityFilter(visibilityState, action) {
  return action.filter;
}

const visibilityFilter = createReducer(SHOW_ALL, {
  SET_VISIBILITY_FILTER: setVisibilityFilter,
});

function toggleShowOldTodos(oldTodosState) {
  return !oldTodosState;
}

const showOldTodos = createReducer(true, {
  TOGGLE_OLD_TODOS: toggleShowOldTodos,
});

function addTodo(todosState, action) {
  const newTodos = todosState.concat({
    id: action.id,
    text: action.text,
    date: action.date,
    completed: false,
    isEditing: false,
  });
  return newTodos;
}

function deleteTodo(todosState, action) {
  const newTodos = todosState.filter(todo => todo.id !== action.id);
  return newTodos;
}

function toggleTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id,
    todo => updateObject(todo, { completed: !todo.completed }));
  return newTodos;
}

function sortTodos(todosState, action) {
  switch (action.filter) {
    case SORT_ASC:
      // sort todos ascendingly
      return sortArray(todosState, (todo1, todo2) => todo1.date - todo2.date);
    case SORT_DESC:
      // sort todos descendingly
      return sortArray(todosState, (todo1, todo2) => todo2.date - todo1.date);
    default:
      throw new Error(`Unexpected sort: ${action.filter}!`);
  }
}

function toggleEditTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id,
    todo => updateObject(todo, { isEditing: !todo.isEditing }));
  return newTodos;
}

function editTodo(todosState, action) {
  const newTodos = updateItemInArray(todosState, action.id,
    todo => updateObject(todo, {
      text: action.text,
      isEditing: !todo.isEditing,
    }));
  return newTodos;
}

const todosReducer = createReducer([], {
  ADD_TODO: addTodo,
  TOGGLE_TODO: toggleTodo,
  EDIT_TODO: editTodo,
  SET_SORT_FILTER: sortTodos,
  DELETE_TODO: deleteTodo,
  TOGGLE_EDIT_TODO: toggleEditTodo,
});

const todoApp = combineReducers({
  visibilityFilter,
  showOldTodos,
  todos: todosReducer,
});

export default todoApp;
