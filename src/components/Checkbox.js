import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ defaultChecked, onChange }) => (
  <input
    type="checkbox"
    onChange={onChange}
    defaultChecked={defaultChecked}
    style={{
      marginLeft: '4px',
    }}
  />
);

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
