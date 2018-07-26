import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_OLD_TODOS,
  SET_VISIBILITY_FILTER,
  SET_SORT_FILTER,
  VisibilityFilters,
  SortFilters,
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;
const { SORT_DESC, SORT_ASC } = SortFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function showOldTodos(state = true, action) {
  switch (action.type) {
    case TOGGLE_OLD_TODOS:
      return !state;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.date,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case SET_SORT_FILTER:
      switch (action.filter) {
        case SORT_ASC:
          // sort todos ascendingly
          return state.slice().sort((todo1, todo2) => todo1.date - todo2.date);
        case SORT_DESC:
          // sort todos descendingly
          return state.slice().sort((todo1, todo2) => todo2.date - todo1.date);
        default:
          throw new Error(`Unexpected sort: ${action.filter}`);
      }
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  showOldTodos,
  todos,
});

export default todoApp;
