import * as CanvasActionType from '../constants/CanvasActionType';

const toggleShowGrid = (state) => {
  const newState = Object.assign({}, state);
  newState.showGrid = !newState.showGrid;
  return newState;
}

const systemReducer = (state = {}, action) => {
  switch (action.type) {
    case CanvasActionType.SYSTEM_TOGGLE_GRID:
      return toggleShowGrid(state)
    default:
      return state
  }
}

export default systemReducer;
