/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
