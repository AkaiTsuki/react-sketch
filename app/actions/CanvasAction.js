import * as CanvasActionType from '../constants/CanvasActionType';

export function createTitle(x, y){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_TITLE,
      dom : 'h1',
      text: 'New Title'
    };
    dispatch(action);
  }
}

export function createLabel(x, y){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_LABEL,
      text: 'New Label'
    };
    dispatch(action);
  }
}

export function createTextInput(){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_TEXT_INPUT
    };
    dispatch(action);
  }
}

export function updateLayout(id, width, height, marginTop, marginBottom){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.UPDATE_LAYOUT,
      id,
      width,
      height,
      marginTop,
      marginBottom
    };
    dispatch(action);
  }
}

export function selectWidget(id){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.SELECT_WIDGET,
      id
    }
    dispatch(action);
  }
}

export function moveWidget(id, offsetX, offsetY){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.DRAG_WIDGET,
      id,
      offsetX,
      offsetY
    }
    dispatch(action);
  }
}

export function updateWidget(id, key, value){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.UPDATE_WIDGET,
      id,
      key,
      value
    }
    dispatch(action);
  }
}
