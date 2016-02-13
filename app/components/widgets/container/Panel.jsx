import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as WidgetUtil from '../../WidgetUtil';
import * as WidgetType from '../../../constants/WidgetType';

export default class Panel extends Component {
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
    const {id, width, height,x,y, isSelected} = this.props;
    let className = "widget abs-pos";
    const style = {
      backgroundColor: 'white',
      width,
      height,
      border: '1px solid #ccc',
      top: y,
      left: x,
      margin: '5px 0'
    }
    if(isSelected){
      className = className + " selected";
    }
    return(
      <div className={className} style={style} onClick={this.handleClick}>
        <div className="full-height" style={{position:'relative'}}>
          {this.props.children}
        </div>

      </div>
    )
  }

  handleClick(){
    const {id, actions} = this.props;
    actions.selectWidget(id);
  }
}
