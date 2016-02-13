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

const selectedReducer = (state={}, action) => {
  switch (action.type) {
    case CanvasActionType.SELECT_WIDGET:
      return updateSelects(state, action.id, false);
    case CanvasActionType.MULTI_SELECT_WIDGET:
      return updateSelects(state, action.id, true);
    default:
      return state;
  }
}

export default selectedReducer;
