import React, { Component } from 'react';
import TextSelector from '../TextSelector/TextSelector';
import Shape from '../Shape/Shape';
import ColorSelector from '../ColorSelector/ColorSelector';

export default class NameTag extends Component {
  state = {
    text: '',
    color: '',
    backColor: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { target } = this.state;
    this.setState(() => {
      return {
        color: target.value,
        backColor: target.value
      };
    });
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }
  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }
  handleBackColorChange = ({ target }) => {
    this.setState({ backColor: target.value });
  }

  render() {
    const { text, color, backColor } = this.state;
    return (
      <>
        <TextSelector text={text} handleChange={this.handleChange}/>
        <Shape text={text} color={color} backColor={backColor}/>
        <ColorSelector color={color} backColor={backColor} handleSubmit={this.handleSubmit} handleChange={this.handleColorChange} />
      </>
    );
  }
}
