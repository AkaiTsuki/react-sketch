import widgetLibReducer from './WidgetLibReducer'
import canvasReducer from './CanvasReducer'
import selectedReducer from './SelectedReducer'
import systemReducer from './SystemReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  widgetLib: widgetLibReducer,
  widgets: canvasReducer,
  selected: selectedReducer,
  config: systemReducer
});

export default rootReducer;
