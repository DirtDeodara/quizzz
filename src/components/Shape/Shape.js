import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, color, backColor }) {
  return (
    <section style={{ backgroundColor:  backColor  }}>
      <p style={{ color: color }}>{text}</p>
    </section>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backColor: PropTypes.string
};

export default Shape;
