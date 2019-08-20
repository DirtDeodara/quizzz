import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, backColor, handleSubmit, handleColorChange, handleBackColorChange }) {
  const colorArr = ['red', 'green', 'blue', 'purple'];
  const mappedColors = colorArr.map(color => {
    return <option key={color} value={color}>{color}</option>;
  });

  const backColorArr = ['lightgrey', 'cream', 'lightblue', 'lightpurple'];
  const mappedBackColors = backColorArr.map(backColor => {
    return <option key={backColor} value={backColor}>{backColor}</option>;
  });
  return (
    <>
    <form onSubmit={handleSubmit}>
      <select name="color" defaultValue={color} handleChange={handleColorChange}>{mappedColors}</select>
      <select name="backgroundColor" defaultValue={backColor} handleChange={handleBackColorChange}>{mappedBackColors}</select>
    </form>
  </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backColor: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleBackColorChange: PropTypes.func.isRequired
};

export default ColorSelector;
