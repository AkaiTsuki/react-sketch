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

export function createPanel(){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_PANEL
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

export function selectWidget(id, multi){
  return (dispatch, getState) => {
    const action = multi ? {
      type: CanvasActionType.MULTI_SELECT_WIDGET,
      id
    }:{
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

export function alignWidgets(widgetIds, direction){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.ALIGN_WIDGETS,
      widgetIds,
      direction
    }
    dispatch(action);
  }
}

export function deleteSelectWidgets(widgetIds){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.DELETE_WIDGETS,
      widgetIds
    }
    dispatch(action);
  }
}

export function unSelectAll(){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.UNSELECT_ALL
    }
    dispatch(action);
  }
}
