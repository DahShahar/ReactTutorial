import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {
  editTodo,
  toggleEditTodo,
  deleteTodo,
  toggleTodo,
  VisibilityFilters,
} from '../actions/actions';

const getVisibleTodos = (todos, visibleFilter) => {
  switch (visibleFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${visibleFilter}`);
  }
};

const mapStateToProps = (state) => {
  if (state.showOldTodos) {
    return { todos: getVisibleTodos(state.todos, state.visibilityFilter) };
  }
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
      .filter(todo => (((new Date().getTime() / 1000) - todo.date) <= 100)),
  };
};

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
  onDeleteClick: id => dispatch(deleteTodo(id)),
  onEditClick: (id, text) => dispatch(editTodo(id, text)),
  onToggleEditClick: id => dispatch(toggleEditTodo(id)),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
