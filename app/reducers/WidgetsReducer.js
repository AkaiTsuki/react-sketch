import uuid from 'node-uuid';
import * as WIDGET_TYPE from '../constants/WidgetType';
import * as CanvasActionType from '../constants/CanvasActionType';

const getYPosition = (state) => {
  let maxY = 0;
  let maxKey = null;

  for(let key in state){
    const ele = state[key];
    if(ele.y + ele.height >= maxY){
      maxY = ele.y + ele.height;
      maxKey = key;
    }
  }

  return maxY;
}

const newTitle = (state, dom, text) => {
  const newState = Object.assign({}, state);

  const id = uuid.v4();
  const widget = {
    id: id,
    type: WIDGET_TYPE.WIDGET_TITLE,
    dom,
    text,
    x: 0,
    y: getYPosition(newState),
    height: 39
  }
  newState[id] = widget;
  return newState;
}

const newLabel = (state, text) => {
  const newState = Object.assign({}, state);
  const id = uuid.v4();

  const widget = {
    id: id,
    type: WIDGET_TYPE.WIDGET_LABEL,
    text,
    x: 0,
    y: getYPosition(newState),
    height: 20
  }

  newState[id] = widget;
  return newState;
}

const widgetsReducer = (state = {}, action) => {
  switch(action.type){
    case CanvasActionType.NEW_TITLE:
      return newTitle(state, action.dom, action.type);
    case CanvasActionType.NEW_LABEL:
      return newLabel(state, action.text);
    default:
      return state;
  }
}

export default widgetsReducer;
