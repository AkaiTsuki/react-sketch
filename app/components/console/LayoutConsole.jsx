import React, { Component, PropTypes } from 'react';

export default class LayoutConsole extends Component {
  constructor(props, context) {
    super(props, context);
    const {widget} = this.props;
    this.state = {
      isEditingX: false,
      isEditingY: false
    }
    this.onClickX = this.onClickX.bind(this);
    this.onBlurX = this.onBlurX.bind(this);
    this.onKeyupX = this.onKeyupX.bind(this);
    this.onClickY = this.onClickY.bind(this);
    this.onBlurY = this.onBlurY.bind(this);
    this.onKeyupY = this.onKeyupY.bind(this);
    this.updateWidget = this.updateWidget.bind(this);
  }

  render() {
    const {widget} = this.props;

    const inputStyle = {
      width: 100,
      marginRight: 10
    }

    return (
      <div className="console-layout-panel">
        <h3>Layout Properties</h3>
        <hr style={{margin: '0 0 5px  0'}} />
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="console-layout-x">left: </label>
            {
              this.state.isEditingX ? <input type="text" className="form-control" id="console-layout-x" defaultValue={widget.x} autoFocus={true} onBlur={this.onBlurX} onKeyUp={this.onKeyupX} style={inputStyle} />
            : <div className="form-control" style={inputStyle} onClick={this.onClickX} >{widget.x}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-y">top: </label>
              {
                this.state.isEditingY ? <input type="text" className="form-control" id="console-layout-y" defaultValue={widget.y} autoFocus={true} onBlur={this.onBlurY} onKeyUp={this.onKeyupY}  style={inputStyle} />
              : <div className="form-control" style={inputStyle} onClick={this.onClickY}>{widget.y}</div>
              }
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-step">step: </label>
            <input type="text" className="form-control" id="console-layout-step" value={10} readOnly style={inputStyle} />
          </div>
        </div>
        <br />
        <div className="form-inline">
          <div className="form-group">
            <label htmlFor="console-layout-width">width: </label>
            <input type="text" className="form-control" id="console-layout-width" value={widget.width} readOnly style={inputStyle} />
          </div>
          <div className="form-group">
            <label htmlFor="console-layout-height">height: </label>
            <input type="text" className="form-control" id="console-layout-height" value={widget.height} readOnly style={inputStyle} />
          </div>
        </div>
      </div>
    )
  }

  onClickX(){
    this.setState({isEditingX: true});
  }

  onBlurX(e){
    this.setState({isEditingX: false});
    const value = e.target.value.trim();
    this.updateWidget('x', parseInt(value));
  }

  onKeyupX(e){
    if(e.keyCode === 13){
      this.setState({isEditingX: false});
      const value = e.target.value.trim();
      this.updateWidget('x', parseInt(value));
    }
  }

  onClickY(){
    this.setState({isEditingY: true});
  }

  onBlurY(e){
    this.setState({isEditingY: false});
    const value = e.target.value.trim();
    this.updateWidget('y', parseInt(value));
  }

  onKeyupY(e){
    if(e.keyCode === 13){
      this.setState({isEditingY: false});
      const value = e.target.value.trim();
      this.updateWidget('y', parseInt(value));
    }
  }

  updateWidget(key, value){
    const {widget, actions} = this.props;
    actions.updateWidget(widget.id, key, value);
  }

}
