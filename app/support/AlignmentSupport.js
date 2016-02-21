import * as CanvasActionType from '../constants/CanvasActionType';

const alignLeft = (prevWidgets, widgets, ids) => {
  const xPositions = ids.map(id => widgets[id].x);
  const alignedXPosition = xPositions.reduce((prev, curr) => prev < curr ? prev : curr );
  const changed = applyXPositionToSelectedWidgetsForLeftAlign(widgets, ids, alignedXPosition);
  return changed ? widgets : prevWidgets;
}

const applyXPositionToSelectedWidgetsForLeftAlign = (widgets, ids, alignedXPosition) => {
  let changed = false;
  ids.forEach(id => {
    if(widgets[id].x !== alignedXPosition) {
      widgets[id].x = alignedXPosition;
      changed = true;
    };
  });

  return changed;
}

const alignRight = (prevWidgets, widgets, ids) => {
  const rightBoundPositions = ids.map(id => widgets[id].x + widgets[id].width);
  const alignedXPosition = rightBoundPositions.reduce((prev, curr) => prev > curr ? prev : curr );
  const changed = applyXPositionToSelectedWidgetsForRightAlign(widgets, ids, alignedXPosition);
  return changed ? widgets : prevWidgets;
}

const applyXPositionToSelectedWidgetsForRightAlign = (widgets, ids, alignedXPosition) => {
  let changed = false;
  ids.forEach(id => {
    const newVal = alignedXPosition -  widgets[id].width;
    if(widgets[id].x !== newVal) {
      widgets[id].x = newVal;
      changed = true;
    }
  });

  return changed;
}

const alignTop = (prevWidgets, widgets, ids) => {
  const topPositions = ids.map(id => widgets[id].y);
  const alignedTopPosition = topPositions.reduce((prev, curr) => prev < curr ? prev : curr);
  const changed = applyYPositionToSelectedWidgetsForTopAlign(widgets, ids, alignedTopPosition);
  return changed ? widgets : prevWidgets;
}

const applyYPositionToSelectedWidgetsForTopAlign = (widgets, ids, position) => {
  let changed = false;
  ids.forEach(id => {
    if(widgets[id].y !== position){
      widgets[id].y = position;
      changed = true;
    }
  });

  return changed;
}

const alignBottom = (prevWidgets, widgets, ids) => {
  const bottomPositions = ids.map(id => widgets[id].y + widgets[id].height);
  const position = bottomPositions.reduce((prev, curr) => prev > curr ? prev : curr );
  const changed = applyYPositionToSelectedWidgetsForBottomAlign(widgets, ids, position);
  return changed ? widgets : prevWidgets;
}

const applyYPositionToSelectedWidgetsForBottomAlign = (widgets, ids, position) => {
  let changed = false;
  ids.forEach(id => {
    const newVal = position - widgets[id].height;
    if(widgets[id].y !== newVal){
      widgets[id].y = newVal;
      changed = true;
    }
  });

  return changed;
}

export const alignWidgets = (prevWidgets, widgets, selectedWidgetIds, direction) => {
  switch(direction){
    case CanvasActionType.ALIGN_DIR_LEFT:
      return alignLeft(prevWidgets, widgets, selectedWidgetIds);
    case CanvasActionType.ALIGN_DIR_RIGHT:
      return alignRight(prevWidgets, widgets, selectedWidgetIds);
    case CanvasActionType.ALIGN_DIR_TOP:
      return alignTop(prevWidgets, widgets, selectedWidgetIds);
    case CanvasActionType.ALIGN_DIR_BOTTOM:
      return alignBottom(prevWidgets, widgets, selectedWidgetIds);
    default:
      console.error("Unsupported alignment direction: "+ direction);
  }
}
