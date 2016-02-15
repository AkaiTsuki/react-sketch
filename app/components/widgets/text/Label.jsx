import React, { Component, PropTypes } from 'react';
import {Measurable} from '../core/Measurable';
import {Selectable} from '../core/Selectable';
import {Draggable} from '../core/Draggable';

class Label extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, text} = this.props;
    const style = {
      margin: 0
    }

    return (<label className="widget" style={style} >{text}</label>);
  }
}

export default Draggable(Selectable(Measurable(Label)));
