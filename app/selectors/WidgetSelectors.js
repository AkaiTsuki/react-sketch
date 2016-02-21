import { createSelector } from 'reselect'

const selectWidgetPast = state => state.widgets.past;
const selectWidgetFuture = state => state.widgets.future;
const widgetSelector = state => state.widgets.present;
const selectedSelector = state => state.selected;
const widgetLibSelector = state => state.widgetLib;
const systemConfigSelector = state => state.config;

const widgetPastSelector = createSelector(
  selectWidgetPast,
  past => past
)

const widgetFutureSelector = createSelector(
  selectWidgetFuture,
  future => future
)

const widgetsSelector = createSelector(
  widgetSelector,
  widgets => widgets
)

const selectsSelector = createSelector(
  selectedSelector,
  selected => selected
)

const libWidgetsSelector = createSelector(
  widgetLibSelector,
  w => w
)

const systemSelector = createSelector(
  systemConfigSelector,
  widgetPastSelector,
  widgetFutureSelector,
  (config, past, future) => {
    return Object.assign({}, config, {
      canUndo: past.length > 0,
      canRedo: future.length > 0
    })
  }
)

const selectedWidgetsSelector = createSelector(
  widgetSelector,
  selectedSelector,
  (widgets, selected) => {
    const selectedWidgets = [];
    for(let id in selected){
      if(selected[id]){
        selectedWidgets.push(widgets[id]);
      }
    }
    return selectedWidgets;
  }
)

const selectIndicatorSelector = createSelector(
  selectedWidgetsSelector,
  selectedWidgets => {
    let leftMost = 5000;
    let rightMost = 0;
    let topMost = 10000;
    let bottomMost = 0;

    selectedWidgets.forEach(widget => {
      leftMost = widget.x < leftMost ? widget.x : leftMost;
      topMost = widget.y < topMost ? widget.y : topMost;
      rightMost = (widget.x + widget.width) > rightMost ? (widget.x + widget.width) : rightMost;
      bottomMost = (widget.y + widget.height) > bottomMost ? (widget.y + widget.height) : bottomMost;
    });

    return {
      left: leftMost,
      top: topMost,
      width: rightMost - leftMost,
      height: bottomMost - topMost
    }
  }
)

export const rootSelector = createSelector(
  [libWidgetsSelector, widgetsSelector, selectsSelector, selectedWidgetsSelector, selectIndicatorSelector, systemSelector],
  (widgetLib, widgets, selected, selectedWidgets, selectIndicator, config) => ({widgetLib, widgets, selected, selectedWidgets, selectIndicator, config})
)
