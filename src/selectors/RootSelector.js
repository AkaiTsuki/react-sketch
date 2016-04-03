import { createSelector } from 'reselect';

import widgetLibSelector from './widgetLibSelector';
import systemConfigSelector from './systemConfigSelector';

const rootSelector = createSelector(
  [widgetLibSelector, systemConfigSelector],
  (widgetLib, systemConfig) => ({
    widgetLib,
    systemConfig
  })
);

export default rootSelector;
