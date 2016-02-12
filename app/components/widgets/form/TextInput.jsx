import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../../WidgetUtil';
import * as WidgetType from '../../../constants/WidgetType';
import { DragSource } from 'react-dnd';


const source = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class TextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const {id, actions} = this.props;
    const self = ReactDOM.findDOMNode(this);
    const width = self.offsetWidth;
    const height = self.offsetHeight;
    const marginTop = WidgetUtil.getTopMargin(self);
    const marginBottom = WidgetUtil.getBottomMargin(self);

    actions.updateLayout(id, width, height, marginTop, marginBottom);
  }

  render(){
    const {id, x, y, isSelected, connectDragSource} = this.props;
    const style = {
      top: y,
      left: x,
      margin: 0,
      width: '50%'
    }

    let className = "widget abs-pos form-control";
    if(isSelected){
      className = className + " selected";
    }

    return connectDragSource(<input type="text" className={className} style={style} onClick={this.handleClick} placeholder="Text Input Box" />);
  }

  handleClick(){
    const {id, actions} = this.props;
    actions.selectWidget(id);
  }
}

export default DragSource(WidgetType.WIDGET_DRAGGABLE, source, collect)(TextInput);
