import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick,
  onDeleteClick,
  onEditClick,
  onToggleEditClick,
}) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onCompleteClick={() => onTodoClick(todo.id)}
        onDeleteClick={() => onDeleteClick(todo.id)}
        onToggleEditClick={() => onToggleEditClick(todo.id)}
        onEditClick={text => onEditClick(todo.id, text)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      isEditing: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onToggleEditClick: PropTypes.func.isRequired,
};

export default TodoList;
