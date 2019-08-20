import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, handleChange }) {
  return (
    <form>
      <input 
        placeholder="Give it to me..." 
        type="text" 
        value={text}
        onChange={handleChange}
      />
    </form>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
