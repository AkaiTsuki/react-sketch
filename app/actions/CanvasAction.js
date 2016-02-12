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
