import widgetLibReducer from './WidgetLibReducer'
import widgetsReducer from './WidgetsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  widgetLib: widgetLibReducer,
  widgets: widgetsReducer
});

export default rootReducer;
