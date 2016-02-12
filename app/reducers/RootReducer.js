import widgetLibReducer from './WidgetLibReducer'
import canvasReducer from './CanvasReducer'
import selectedReducer from './SelectedReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  widgetLib: widgetLibReducer,
  widgets: canvasReducer,
  selected: selectedReducer
});

export default rootReducer;
