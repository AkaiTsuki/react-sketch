import React, { Component, PropTypes } from 'react';
import {Measurable} from '../core/Measurable';
import {Selectable} from '../core/Selectable';
import {Draggable} from '../core/Draggable';

class Panel extends Component{
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
        <div style={{position:'relative'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Draggable(Selectable(Measurable(Panel)));