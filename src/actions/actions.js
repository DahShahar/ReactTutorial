/**
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_SORT_FILTER = 'SET_SORT_FILTER';

/**
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const SortFilters = {
  SORT_DESC: 'SORT_DESC',
  SORT_ASC: 'SORT_ASC',
};

/**
 * action creators
 */

let nextTodoId = -1;
export function addTodo(text, seconds) {
  nextTodoId += 1;
  return {
    type: ADD_TODO,
    id: nextTodoId,
    date: seconds,
    text,
  };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export function setSortFilter(filter) {
  return { type: SET_SORT_FILTER, filter };
}
