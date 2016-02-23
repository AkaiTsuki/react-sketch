import * as ResizeConstants from '../constants/ResizeConstants';

export const REVISE_STEP = 20;
export const REVISE_STEP_HALF = REVISE_STEP / 2;

export const snapToGrid = (val) => {
  return Math.round(val / REVISE_STEP) * REVISE_STEP;
}

export const snapToGridHalf = (val) => {
  return Math.round(val / REVISE_STEP_HALF) * REVISE_STEP_HALF;
}

/**
* calculate the left top coordination for drag select rectangle.
*
* Drag select is dragging paper and drop on canvas, the paper and canvas share
* same dimension. The init client offset is the left top position of mouse in corresponding to
* the browser window. The init source client offset is the left top position of paper in corresponding to
* the browser window.
*
* @param currentOffset: the current mouse move delta offset relate to the init drag position
* @param initClientOffset: the init left top position when drag start
* @param initSourceClientOffset: the init left top position of dragging source when drag start
*/
export const calculateDragSelectRectLeftTopPosition = (currentOffset, initClientOffset, initSourceClientOffset) => {
  return {
    x: currentOffset.x < 0 ? initClientOffset.x - initSourceClientOffset.x + currentOffset.x : initClientOffset.x - initSourceClientOffset.x,
    y: currentOffset.y < 0 ? initClientOffset.y - initSourceClientOffset.y + currentOffset.y : initClientOffset.y - initSourceClientOffset.y,
  };
}

export const nextAvailableYPosition = (widgets) => {
  let maxY = 0;

  for(let key in widgets){
    const ele = widgets[key];
    if(ele.y + ele.height >= maxY){
      maxY = ele.y + ele.height;
    }
  }

  return snapToGrid(maxY+REVISE_STEP);
}

export const nextAvailableXPosition = (widgets) => {
  return snapToGrid(REVISE_STEP);
}

export const calculateResizeIndicatorPosition = (width, height, indicatorLen, direction) => {
  switch (direction) {
    case ResizeConstants.R:
      return {
        x: width - indicatorLen / 2,
        y: (height - indicatorLen) / 2
      }
    case ResizeConstants.L:
      return {
        x: 0 - indicatorLen / 2,
        y: (height - indicatorLen) / 2
      }
    case ResizeConstants.T:
      return {
        x: (width - indicatorLen) / 2,
        y: 0 - indicatorLen / 2
      }
    case ResizeConstants.B:
      return {
        x: (width - indicatorLen) / 2,
        y: height - indicatorLen / 2
      }
    default:
      console.log("Unsupported Reisze Direction: "+ direction);
      return null;
  }
}
