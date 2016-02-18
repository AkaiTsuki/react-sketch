import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import CustomDragLayer from './support/CustomDragLayer.jsx';
import {renderDraggable} from '../support/WidgetRenderSupport'
import * as WIDGET_TYPE from '../constants/WidgetType';

const CANVAS_ID = 'canvas';

const source = {
  canDrag(props) {
    for(let id in props.selected){
      if(props.selected[id]) return false;
    }
    return true;
  },

  beginDrag(props, monitor, component) {
    return {
      id : CANVAS_ID,
      scrollTop: component.state.scrollTop
    };
  }
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Paper extends Component {
  constructor(props, context) {
    super(props, context);
    this._onClick = this._onClick.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this.state = {
      scrollTop : 0
    }
  }

  componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true
    });
  }

  render() {
    const {connectDropTarget, connectDragSource, widgets} = this.props;

    const paperStyle = {
      position:'relative',
      backgroundColor: 'white',
      left: 0,
      top: 0,
      width: 5000,
      height: 10000
      // background: 'linear-gradient(180deg, #ccc 10%, rgba(255, 255, 255, 0) 0),linear-gradient(90deg, #ccc 10%, #fff 0)',
      // backgroundSize: '20px 20px'
    }

    return connectDragSource(
      <div className="paper full-height" style={paperStyle} onScroll={this._onScroll} onClick={this._onClick}>
        {this.renderWidgets()}
        <CustomDragLayer widgets={widgets} scrollTop={this.state.scrollTop}/>
      </div>
    )
  }

  _onScroll(e){
    this.state.scrollTop = e.target.scrollTop;
  }

  _onClick(e) {
    const {actions} = this.props;
    actions.unSelectAll();
  }

  renderWidgets() {
    const {widgets} = this.props;

    const widgetEle = [];
    for(let key in widgets){
      const widget = widgets[key];
      widgetEle.push(this.renderWidget(widget));
    }
    return widgetEle;
  }

  renderWidget(widget) {
    return renderDraggable(widget, this.props);
  }
}

export default DragSource(WIDGET_TYPE.WIDGET_DRAGGABLE, source, collect)(Paper);
