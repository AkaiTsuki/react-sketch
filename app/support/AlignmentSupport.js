import * as CanvasActionType from '../constants/CanvasActionType';

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
    widgets[id].x = alignedXPosition -  widgets[id].width;
  });

  return widgets;
}

const alignTop = (widgets, ids) => {
  const topPositions = ids.map(id => widgets[id].y);
  const alignedTopPosition = topPositions.reduce((prev, curr) => prev < curr ? prev : curr);
  return applyYPositionToSelectedWidgetsForTopAlign(widgets, ids, alignedTopPosition);
}

const applyYPositionToSelectedWidgetsForTopAlign = (widgets, ids, position) => {
  ids.forEach(id => {
    widgets[id].y = position;
  });

  return widgets;
}

const alignBottom = (widgets, ids) => {
  const bottomPositions = ids.map(id => widgets[id].y + widgets[id].height);
  const position = bottomPositions.reduce((prev, curr) => prev > curr ? prev : curr );
  return applyYPositionToSelectedWidgetsForBottomAlign(widgets, ids, position);
}

const applyYPositionToSelectedWidgetsForBottomAlign = (widgets, ids, position) => {
  ids.forEach(id => {
    widgets[id].y = position - widgets[id].height;
  });

  return widgets;
}

export const alignWidgets = (widgets, selectedWidgetIds, direction) => {
  switch(direction){
    case CanvasActionType.ALIGN_DIR_LEFT:
      return alignLeft(widgets, selectedWidgetIds);
    case CanvasActionType.ALIGN_DIR_RIGHT:
      return alignRight(widgets, selectedWidgetIds);
    case CanvasActionType.ALIGN_DIR_TOP:
      return alignTop(widgets, selectedWidgetIds);
    case CanvasActionType.ALIGN_DIR_BOTTOM:
      return alignBottom(widgets, selectedWidgetIds);
    default:
      console.error("Unsupported alignment direction: "+ direction);
  }
}
