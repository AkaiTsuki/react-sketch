const alignLeft = (widgets, ids) => {
  const xPositions = ids.map(id => widgets[id].x);
  const alignedXPosition = xPositions.reduce((prev, curr) => prev < curr ? prev : curr );
  return applyXPositionToSelectedWidgetsForLeftAlign(widgets, ids, alignedXPosition);
}

const applyXPositionToSelectedWidgetsForLeftAlign = (widgets, ids, alignedXPosition) => {
  ids.forEach(id => {
    widgets[id].x = alignedXPosition;
  });

  return widgets;
}

const alignRight = (widgets, ids) => {
  const rightBoundPositions = ids.map(id => widgets[id].x + widgets[id].width);
  const alignedXPosition = rightBoundPositions.reduce((prev, curr) => prev > curr ? prev : curr );
  return applyXPositionToSelectedWidgetsForRightAlign(widgets, ids, alignedXPosition);
}

const applyXPositionToSelectedWidgetsForRightAlign = (widgets, ids, alignedXPosition) => {
  ids.forEach(id => {
    widgets[id].x = alignedXPosition -   widgets[id].width;
  });

  return widgets;
}

export const alignWidgets = (widgets, selectedWidgetIds, direction) => {
  switch(direction){
    case "left":
      return alignLeft(widgets, selectedWidgetIds);
    case "right":
      return alignRight(widgets, selectedWidgetIds);
    default:
      console.error("Unsupported alignment direction: "+ direction);
  }
}
