import './index.css';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App';

render(
  <App />,
  document.getElementById('app')
);
