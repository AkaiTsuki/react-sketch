import * as WIDGET_TYPE from '../constants/WidgetType';
import * as CanvasActionType from '../constants/CanvasActionType';


const toggleSelect = (state, id) => {
  if(state[id] === true){
    unselect(state, id);
  } else {
    state[id] = true;
  }
}

const unselect = (state, id) => {
  state[id] = false;
}

const updateSelects = (state, id, multi) => {
  const newState = Object.assign({}, state);
  toggleSelect(newState, id);

  if(multi) return newState;

  for(let _id in newState){
    if(_id != id){
      unselect(newState, _id);
    }
  }

  return newState;
}

const deleteSelects = (state, ids) => {
  const newState = {};

  for(let id in state){
    if(ids.indexOf(id) < 0) newState[id] = state[id];
  }

  return newState;
}

const dragSelectWidgets = (state, widgets, initPos, range) => {
  const newState = {};

  const startX = initPos.x;
  const startY = initPos.y;
  const endX = initPos.x + range.x;
  const endY = initPos.y + range.y;

  for(let id in widgets){
    const widget = widgets[id];
    if(startX <= widget.x && widget.x <= endX && startY <= widget.y && widget.y <= endY
      && startX <= widget.x+widget.width && widget.x+widget.width <= endX && startY <= widget.y+widget.height && widget.y+widget.height <= endY){
      newState[id] = true;
    }
  }

  return newState;
}

const selectedReducer = (state={}, action) => {
  switch (action.type) {
    case CanvasActionType.SELECT_WIDGET:
      return updateSelects(state, action.id, false);
    case CanvasActionType.MULTI_SELECT_WIDGET:
      return updateSelects(state, action.id, true);
    case CanvasActionType.DELETE_WIDGETS:
      return deleteSelects(state, action.widgetIds);
    case CanvasActionType.UNSELECT_ALL:
      return {};
    case CanvasActionType.DRAG_SELECT:
      return dragSelectWidgets(state, action.widgets, action.initPos, action.dimension);
    default:
      return state;
  }
}

export default selectedReducer;
