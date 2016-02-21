import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/RootReducer.js';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import {config} from './SystemConfig';

import WidgetDefinition from './WidgetDefinition';

const loggerMiddleware = createLogger();
const initState = {
  widgetLib: WidgetDefinition,
  widgets: {},
  selected: {},
  config
};

const store = createStore(rootReducer, initState, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
