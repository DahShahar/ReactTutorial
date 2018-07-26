/*
 * eslint jsx-a11y/click-events-have-key-events 0
 * eslint jsx-a11y/no-noninteractive-element-interactions 0
 */

import React from 'react';
import PropTypes from 'prop-types';

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
