import React from 'react';
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  title: PropTypes.string,
};

MyComponent.defaultProps = {
  title: 'A simple count',
};

export default function MyComponent(props) {
  const { title } = props;
  return (
    <h1>
      {title}
    </h1>
  );
}
