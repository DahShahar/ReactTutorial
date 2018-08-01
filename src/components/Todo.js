import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  onCompleteClick,
  onDeleteClick,
  onEditClick,
  onToggleEditClick,
  completed,
  text,
  isEditing,
}) => {
  let input;

  return (isEditing
    ? (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              onEditClick(text);
            } else {
              onEditClick(input.value);
            }
          }}
        >
          <input ref={(node) => {
            input = node;
          }}
          />
          <button type="submit">
            Save Todo
          </button>
        </form>
      </div>
    )
    : (
      <li
        role="presentation"
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {text}
        <button
          type="button"
          onClick={onCompleteClick}
        >
          {completed ? 'Undo' : 'Mark Complete'}
        </button>
        <button
          type="button"
          onClick={onDeleteClick}
        >
          Delete Todo
        </button>
        <button
          type="button"
          onClick={onToggleEditClick}
        >
          Edit Todo
        </button>
      </li>
    )
  );
};

Todo.propTypes = {
  onCompleteClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onToggleEditClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
};

export default Todo;
