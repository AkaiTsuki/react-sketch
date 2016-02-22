import * as CanvasActionType from '../constants/CanvasActionType';
import { ActionCreators as UndoActionCreators } from 'redux-undo'

export function initApp(widgets){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.INIT_APP,
      widgets
    };
    dispatch(action);
  }
}

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

export function createCheckbox(){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_CHECKBOX
    };
    dispatch(action);
  }
}

export function createRadio(){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_RADIO
    };
    dispatch(action);
  }
}

export function createTextArea(){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_TEXTAREA
    };
    dispatch(action);
  }
}

export function createDropDown(){
  return (dispatch, getState) => {
    const action = {
      type: CanvasActionType.NEW_DROPDOWN
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

export function moveSelectedWidgets(selected, offsetX, offsetY){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.DRAG_WIDGETS,
      selected,
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

export function updateDropDownOption(widgetId, optionId, key, value){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.UPDATE_DROPDOWN_OPTION,
      id: widgetId,
      optionId,
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

export function selectWidgetsInRect(widgets, init, dimension){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.DRAG_SELECT,
      widgets,
      initPos: init,
      dimension
    }
    dispatch(action);
  }
}

export function resizeWidget(id, direction, x, y){
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.RESIZE_WIDGET,
      id,
      direction,
      x,
      y
    }
    dispatch(action);
  }
}

export function toggleShowGrid() {
  return (dispatch, getState) => {
    const action = {
      type : CanvasActionType.SYSTEM_TOGGLE_GRID
    }
    dispatch(action);
  }
}

export function undo(){
  return (dispatch, getState) => {
    dispatch(UndoActionCreators.undo());
  }
}

export function redo(){
  return (dispatch, getState) => {
    dispatch(UndoActionCreators.redo());
  }
}
