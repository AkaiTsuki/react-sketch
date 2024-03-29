import uuid from 'node-uuid';
import * as WIDGET_TYPE from '../constants/WidgetType';
import * as ResizeConstants from '../constants/ResizeConstants';
import * as CanvasActionType from '../constants/CanvasActionType';
import * as AlignmentSupport from '../support/AlignmentSupport';
import * as ResizeSupport from '../support/ResizeSupport';
import {snapToGrid, nextAvailableYPosition, nextAvailableXPosition} from '../support/PositionSupport.js';
import undoable, { distinctState, excludeAction } from 'redux-undo';

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

const newTitle = (state, dom, text) => {
  const newState = copyState(state);

  const id = uuid.v4();
  const widget = {
    id: id,
    type: WIDGET_TYPE.WIDGET_TITLE,
    dom,
    text,
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState),
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
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState)
  }

  newState[id] = widget;
  return newState;
}

const newTextInput = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();

  const widget = {
    id,
    width: 200,
    minWidth: 200,
    minHeight: 34,
    fieldName: 'undefined',
    type: WIDGET_TYPE.WIDGET_INPUT_TEXT,
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState)
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
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState),
    width: 400,
    minWidth: 20,
    height: 500,
    minHeight: 20
  }

  newState[id] = widget;
  return newState;
}

const newCheckbox = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();
  newState[id] = {
    id,
    type: WIDGET_TYPE.WIDGET_INPUT_CHECKBOX,
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState),
    label: 'Checkbox',
    fieldName: 'undefined',
    fieldValue: 'undefined'
  }
  return newState;
}

const newRadio = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();
  newState[id] = {
    id,
    type: WIDGET_TYPE.WIDGET_INPUT_RADIO,
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState),
    label: 'Radio',
    fieldName: 'undefined',
    fieldValue: 'undefined'
  }
  return newState;
}

const newTextArea = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();
  newState[id] = {
    id,
    type: WIDGET_TYPE.WIDGET_INPUT_TEXTAREA,
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState),
    fieldName: 'undefined',
    width: 300,
    minWidth: 20,
    height: 200,
    minHeight: 20
  }
  return newState;
}

const newDropDown = (state) => {
  const newState = copyState(state);
  const id = uuid.v4();
  newState[id] = {
    id,
    type: WIDGET_TYPE.WIDGET_INPUT_DROPDOWN,
    x: nextAvailableXPosition(newState),
    y: nextAvailableYPosition(newState),
    fieldName: 'undefined',
    options: [
      {id: uuid.v4(), value: 'Option 1', display: 'Option 1'},
      {id: uuid.v4(), value: 'Option 2', display: 'Option 2'}
    ],
    disabled: true,
    width: 200
  }
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

const revise = (val) => {
  const result = snapToGrid(val);
  return result < 0 ? 0 : result;
}

const dragWidget = (state, id, offsetX, offsetY) => {
  const newState = copyState(state);

  newState[id].x = revise(newState[id].x + offsetX);
  newState[id].y = revise(newState[id].y + offsetY);

  return newState;
}

const dragWidgets = (state, selected, offsetX, offsetY) => {
  const newState = copyState(state);

  for(let id in selected){
    if(selected[id]){
      newState[id].x = revise(newState[id].x + offsetX);
      newState[id].y = revise(newState[id].y + offsetY);
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

const updateDropDownOption = (state, id, optionId, key, value) => {
  const newState = copyState(state);

  if(newState[id].options){
    newState[id].options = newState[id].options.map(opt => {
      if(opt.id === optionId) {
        const newOpt = Object.assign({}, opt, {
          [key] : value
        });
        return newOpt;
      }else {
        return opt;
      }
    })
  }

  return newState;
}

const deleteDropDownOption = (state, widgetId, optionId) => {
  const newState = copyState(state);

  newState[widgetId].options = newState[widgetId].options.filter(opt => opt.id !== optionId);

  return newState;
}

const addDropDownOption = (state, widgetId) => {
  const newState = copyState(state);
  newState[widgetId].options = newState[widgetId].options.map(opt => opt);
  newState[widgetId].options.push({
    id: uuid.v4(),
    value: 'New Option',
    display: 'New Option'
  })
  return newState;
}

const alignWidgets = (state, ids, dir) => {
  const newState = copyState(state);
  return AlignmentSupport.alignWidgets(state, newState, ids, dir);
}

const deleteSelectWidgets = (state, ids) => {
  const newState = {};

  for(let id in state){
    if(ids.indexOf(id) < 0)
      newState[id] = state[id];
  }

  return newState;
}

const resizeWidget = (state, id, direction, deltaX, deltaY) => {
  const newState = copyState(state);

  switch(direction){
    case ResizeConstants.R:
      return ResizeSupport.resizeWidthFromRight(newState, id, deltaX);
    case ResizeConstants.L:
      return ResizeSupport.resizeWidthFromLeft(newState, id, deltaX);
    case ResizeConstants.T:
      return ResizeSupport.resizeHeightFromTop(newState, id, deltaY);
      case ResizeConstants.B:
        return ResizeSupport.resizeHeightFromBottom(newState, id, deltaY);
    default:
      console.error("Unsupported resize direction: " + direction);
  }
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
    case CanvasActionType.NEW_CHECKBOX:
      return newCheckbox(state);
    case CanvasActionType.NEW_RADIO:
      return newRadio(state);
    case CanvasActionType.NEW_TEXTAREA:
      return newTextArea(state);
    case CanvasActionType.NEW_DROPDOWN:
      return newDropDown(state);
    case CanvasActionType.UPDATE_LAYOUT:
      return updateLayoutService(state, action.id, action.width, action.height, action.marginTop, action.marginBottom);
    case CanvasActionType.DRAG_WIDGET:
      return dragWidget(state, action.id, action.offsetX, action.offsetY);
    case CanvasActionType.DRAG_WIDGETS:
      return dragWidgets(state, action.selected, action.offsetX, action.offsetY);
    case CanvasActionType.UPDATE_WIDGET:
      return updateWidgetProperties(state, action.id, action.key, action.value);
    case CanvasActionType.UPDATE_DROPDOWN_OPTION:
      return updateDropDownOption(state, action.id, action.optionId, action.key, action.value);
    case CanvasActionType.DELETE_DROPDOWN_OPTION:
      return deleteDropDownOption(state, action.widgetId, action.optionId);
    case CanvasActionType.ADD_DROPDOWN_OPTION:
      return addDropDownOption(state, action.widgetId);
    case CanvasActionType.ALIGN_WIDGETS:
      return alignWidgets(state, action.widgetIds, action.direction);
    case CanvasActionType.DELETE_WIDGETS:
      return deleteSelectWidgets(state, action.widgetIds);
    case CanvasActionType.RESIZE_WIDGET:
      return resizeWidget(state, action.id, action.direction, action.x, action.y);
    default:
      return state;
  }
}

export default undoable(canvasReducer, {
  filter: function filterState(action, currentState, previousState) {
    return currentState !== previousState && action.type !== CanvasActionType.UPDATE_LAYOUT && action.type !== CanvasActionType.INIT_APP
  }
});
