import React, { Component, PropTypes } from 'react';
import {Measurable} from '../core/Measurable';
import {Selectable} from '../core/Selectable';
import {Draggable} from '../core/Draggable';

class Title extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {id, text, tag} = this.props;
    const Tag = tag;

    return <Tag className="widget" id={id}>{text}</Tag>
  }
}

export default Draggable(Selectable(Measurable(Title)));
