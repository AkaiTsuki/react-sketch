import { createSelector } from 'reselect';

const select = state => state.systemConfig;

const systemConfigSelector = createSelector(
  select,
  w => w
);

export default systemConfigSelector;
