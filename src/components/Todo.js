import React from 'react';
import PropTypes from 'prop-types';

// import EditLink from '../containers/EditLink';
// import DeleteLink from '../containers/DeleteLink';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    onKeyDown={onClick}
    role="presentation"
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
