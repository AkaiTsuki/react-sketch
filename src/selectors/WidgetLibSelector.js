import { createSelector } from 'reselect';

const select = state => state.widgetLib;

const widgetLibSelector = createSelector(
  select,
  w => w
);

export default widgetLibSelector;
