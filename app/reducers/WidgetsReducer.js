import uuid from 'node-uuid';
import * as WIDGET_TYPE from '../constants/WidgetType';

const newTitle = (state, dom, text) => {
  const newState = Object.assign({}, state);

  const id = uuid.v4();
  const widget = {
    id: id,
    type: WIDGET_TYPE.WIDGET_TITLE,
    dom,
    text
  }
  newState[id] = widget;
  return newState;
}

const widgetsReducer = (state = {}, action) => {
  switch(action.type){
    case 'NEW_TITLE':
      return newTitle(state, action.dom, action.type);
    default:
      return state;
  }
}

export default widgetsReducer;
