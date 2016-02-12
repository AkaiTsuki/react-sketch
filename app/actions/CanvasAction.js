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
