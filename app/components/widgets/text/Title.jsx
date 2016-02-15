import React, { Component, PropTypes } from 'react';
import {Measurable} from '../../support/Measurable';
import {Selectable} from '../../support/Selectable';
import {Draggable} from '../../support/Draggable';

class Title extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, text, tag, width, height} = this.props;
    const Tag = tag;

    const style = {
      margin: 0
    }

    return <Tag className="widget" id={id} style={style}>{text}</Tag>
  }
}

export default Draggable(Selectable(Measurable(Title)));
