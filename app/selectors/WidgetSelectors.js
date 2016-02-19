import { createSelector } from 'reselect'

const widgetSelector = state => state.widgets
const selectedSelector = state => state.selected
const widgetLibSelector = state => state.widgetLib

const widgetsSelector = createSelector(
  widgetSelector,
  widget => widget
)

const selectsSelector = createSelector(
  selectedSelector,
  select => select
)

const libWidgetsSelector = createSelector(
  widgetLibSelector,
  w => w
)

const selectedWidgetsSelector = createSelector(
  widgetSelector,
  selectedSelector,
  (widgets, selected) => {
    const selectedWidgets = {};
    for(let id in selected){
      if(selected[id]){
        selectedWidgets[id] = widgets[id];
      }
    }
    return selectedWidgets;
  }
)

export const rootSelector = createSelector(
  [libWidgetsSelector, widgetsSelector, selectsSelector, selectedWidgetsSelector],
  (widgetLib, widgets, selected, selectedWidgets) => ({widgetLib, widgets, selected, selectedWidgets})
)
