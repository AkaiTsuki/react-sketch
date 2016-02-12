import React, { Component, PropTypes } from 'react';
// Drag and Drop Lib
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class MainFrame extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid full-height" >
        <div className="row full-height">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(MainFrame);
