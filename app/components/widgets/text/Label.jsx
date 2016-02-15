import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';

class Label extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, text, width, height} = this.props;
    const style = {
      margin: 0
    }

    return (<label className="widget" style={style} >{text}</label>);
  }
}

export default Draggable(Selectable(Measurable(Label)));
