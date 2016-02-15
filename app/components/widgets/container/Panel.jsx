import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';

export default class Panel extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, width, height, x, y, isSelected} = this.props;

    const style = {
      backgroundColor: 'white',
      width,
      height,
      border: '1px solid #ccc',
      padding: '5px',
    }

    return (
      <div className="widget" style={style}>
        <div style={{position: 'relative'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
