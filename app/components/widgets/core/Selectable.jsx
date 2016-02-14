import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

/**
* Selectable HOC wraps a given compoennt so that it can be selected/unselected
* when a mouse click event happens on this wrapper.
*/
export const Selectable = ComposedComponent => {
  class SelectableProvider extends Component{

    constructor(props, context) {
      super(props, context);
      this._onClick = this._onClick.bind(this);
    }

    render(){
      const {isSelected} = this.props;
      let className='selectable';
      if(isSelected){
        className += " selected";
      }

      return (<div className={className} onClick={this._onClick} ><ComposedComponent {...this.props}/></div>);
    }

    _onClick(e){
      const {id, onSelect} = this.props;
      if(!id){
        console.error("No id field is defined in props");
      } else {
        onSelect(id, e.ctrlKey);
      }
    }
  }

  return SelectableProvider
}
