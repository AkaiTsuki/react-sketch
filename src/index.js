// css
import './index.css';
// react
import React from 'react';
import { render } from 'react-dom';
// redux
import { createStore, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
// application
import rootReducer from './reducers/RootReducer';
import App from './containers/App';
import WidgetDefinition from './support/WidgetDefinition';

const loggerMiddleware = createLogger();
const initState = {
  widgetLib: WidgetDefinition
};

const store = createStore(rootReducer, initState, applyMiddleware(thunkMiddleware, loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
