/* eslint react/prop-types: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value, new Date().getTime() / 1000));
          input.value = '';
        }}
      >
        <input ref={(node) => {
          input = node;
        }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
