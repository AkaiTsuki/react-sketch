import uuid from 'node-uuid';
import * as WIDGET_TYPE from '../constants/WidgetType';
import * as CanvasActionType from '../constants/CanvasActionType';

const getYPosition = (state) => {
  let maxY = 0;
  let maxKey = null;

  for(let key in state){
    const ele = state[key];
    if(ele.y + ele.height >= maxY){
      maxY = ele.y + ele.height + ele.marginTop + ele.marginBottom;
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
    y: getYPosition(newState)
  }

  newState[id] = widget;
  return newState;
}

const newTextInput = (state) => {
  const newState = Object.assign({}, state);
  const id = uuid.v4();

  const widget = {
    id,
    type: WIDGET_TYPE.WIDGET_INPUT_TEXT,
    x: 0,
    y: getYPosition(newState)
  }

  newState[id] = widget;
  return newState;
}

const updateLayoutService = (state, id, width, height, marginTop, marginBottom) => {
  const newState = Object.assign({}, state);
  newState[id].height = height;
  newState[id].width = width;
  newState[id].marginTop = marginTop;
  newState[id].marginBottom = marginBottom;
  return newState;
}

const moveWidget = (state, id, offsetX, offsetY) => {
  const newState = Object.assign({}, state);

  newState[id].x = newState[id].x + offsetX;
  newState[id].y = newState[id].y + offsetY;

  return newState;
}

const canvasReducer = (state = {}, action) => {
  switch(action.type){
    case CanvasActionType.NEW_TITLE:
      return newTitle(state, action.dom, action.type);
    case CanvasActionType.NEW_LABEL:
      return newLabel(state, action.text);
    case CanvasActionType.NEW_TEXT_INPUT:
      return newTextInput(state);
    case CanvasActionType.UPDATE_LAYOUT:
      return updateLayoutService(state, action.id, action.width, action.height, action.marginTop, action.marginBottom);
    case CanvasActionType.MOVE_WIDGET:
      return moveWidget(state, action.id, action.offsetX, action.offsetY);
    default:
      return state;
  }
}

export default canvasReducer;
