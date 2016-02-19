import { createSelector } from 'reselect'

const widgetSelector = state => state.widgets
const selectedSelector = state => state.selected
const widgetLibSelector = state => state.widgetLib

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
  [libWidgetsSelector, widgetsSelector, selectsSelector, selectedWidgetsSelector, selectIndicatorSelector],
  (widgetLib, widgets, selected, selectedWidgets, selectIndicator) => ({widgetLib, widgets, selected, selectedWidgets, selectIndicator})
)
