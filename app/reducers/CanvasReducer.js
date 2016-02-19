import uuid from 'node-uuid';
import * as WIDGET_TYPE from '../constants/WidgetType';
import * as CanvasActionType from '../constants/CanvasActionType';
import * as AlignmentSupport from '../support/AlignmentSupport';

const copyState = (state) => {
  const newState = {};
  for(let id in state){
    newState[id] = Object.assign({}, state[id]);
  }
  return newState;
}

const initApp = (state, widgets) => {
  return widgets;
}

const getYPosition = (state) => {
  let maxY = 0;
  let maxKey = null;

  for(let key in state){
    const ele = state[key];
    if(ele.y + ele.height >= maxY){
      maxY = ele.y + ele.height;
      if(ele.marginTop && ele.marginBottom){
        maxY += ele.marginTop + ele.marginBottom;
      }
      maxKey = key;
    }
  }

  return maxY;
}

const newTitle = (state, dom, text) => {
  const newState = copyState(state);

  const id = uuid.v4();
  const widget = {
    id: id,
    type: WIDGET_TYPE.WIDGET_TITLE,
    dom,
    text,
    x: 20,
    y: getYPosition(newState),
    height: 39
  }
  newState[id] = widget;
  return newState;
}

const newLabel = (state, text) => {
  const newState = copyState(state);
  const id = uuid.v4();

  const widget = {
    id: id,
    type: WIDGET_TYPE.WIDGET_LABEL,
    text,
    x: 20,
    y: getYPosition(newState)
  }

  newState[id] = widget;
  return newState;
}

const newTextInput = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();

  const widget = {
    id,
    type: WIDGET_TYPE.WIDGET_INPUT_TEXT,
    x: 20,
    y: getYPosition(newState)
  }

  newState[id] = widget;
  return newState;
}

const newPanel = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();

  const widget = {
    id,
    type: WIDGET_TYPE.WIDGET_PANEL,
    x: 20,
    y: getYPosition(newState),
    width: 400,
    height: 500
  }

  newState[id] = widget;
  return newState;
}

const updateLayoutService = (state, id, width, height, marginTop, marginBottom) => {
  const newState = copyState(state);
  newState[id].height = height;
  newState[id].width = width;
  newState[id].marginTop = marginTop;
  newState[id].marginBottom = marginBottom;
  return newState;
}

const reviseToTens = (val) => {
  const result = Math.round(val / 20) * 20;
  return result < 0 ? 0 : result;
}

const dragWidget = (state, id, offsetX, offsetY) => {
  const newState = copyState(state);

  newState[id].x = reviseToTens(newState[id].x + offsetX);
  newState[id].y = reviseToTens(newState[id].y + offsetY);

  return newState;
}

const dragWidgets = (state, selected, offsetX, offsetY) => {
  const newState = copyState(state);

  for(let id in selected){
    if(selected[id]){
      newState[id].x = reviseToTens(newState[id].x + offsetX);
      newState[id].y = reviseToTens(newState[id].y + offsetY);
    }
  }

  return newState;
}

const updateWidgetProperties = (state, id, key, value) => {
  const newState = copyState(state);
  switch(key){
    case "x":
    case "y":
    case "width":
    case "height":
      newState[id][key] = parseInt(value);
      break;
    default:
      newState[id][key] = value;
  }

  return newState;
}

const alignWidgets = (state, ids, dir) => {
  const newState = copyState(state);
  return AlignmentSupport.alignWidgets(newState, ids, dir);
}

const deleteSelectWidgets = (state, ids) => {
  const newState = {};

  for(let id in state){
    if(ids.indexOf(id) < 0)
      newState[id] = state[id];
  }

  return newState;
}

const canvasReducer = (state = {}, action) => {
  switch(action.type){
    case CanvasActionType.INIT_APP:
      return initApp(state, action.widgets);
    case CanvasActionType.NEW_TITLE:
      return newTitle(state, action.dom, action.type);
    case CanvasActionType.NEW_LABEL:
      return newLabel(state, action.text);
    case CanvasActionType.NEW_TEXT_INPUT:
      return newTextInput(state);
    case CanvasActionType.NEW_PANEL:
      return newPanel(state);
    case CanvasActionType.UPDATE_LAYOUT:
      return updateLayoutService(state, action.id, action.width, action.height, action.marginTop, action.marginBottom);
    case CanvasActionType.DRAG_WIDGET:
      return dragWidget(state, action.id, action.offsetX, action.offsetY);
    case CanvasActionType.DRAG_WIDGETS:
      return dragWidgets(state, action.selected, action.offsetX, action.offsetY);
    case CanvasActionType.UPDATE_WIDGET:
      return updateWidgetProperties(state, action.id, action.key, action.value);
    case CanvasActionType.ALIGN_WIDGETS:
      return alignWidgets(state, action.widgetIds, action.direction);
    case CanvasActionType.DELETE_WIDGETS:
      return deleteSelectWidgets(state, action.widgetIds);
    default:
      return state;
  }
}

export default canvasReducer;
