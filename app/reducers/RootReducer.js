import widgetLibReducer from './WidgetLibReducer'
import canvasReducer from './CanvasReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  widgetLib: widgetLibReducer,
  widgets: canvasReducer
});

export default rootReducer;
