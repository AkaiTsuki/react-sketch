import { createSelector } from 'reselect';

import widgetLibSelector from './widgetLibSelector';

const rootSelector = createSelector(
  [widgetLibSelector],
  (widgetLib) => ({
    widgetLib
  })
);

export default rootSelector;
