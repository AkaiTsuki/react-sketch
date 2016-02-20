export const resizeWidthFromRight = (widgets, id, deltaX) => {
  const target = widgets[id];
  const {width, x, minWidth} = target;

  const newWidth = width + deltaX < minWidth ? minWidth : width + deltaX;

  widgets[id].width = newWidth;

  return widgets;
}

export const resizeWidthFromLeft = (widgets, id, deltaX) => {
  const target = widgets[id];
  const {width, x, minWidth} = target;

  const newWidth = width - deltaX < minWidth ? minWidth : width - deltaX;
  const newX = x + deltaX < 0 ? 0 : x + deltaX;
  widgets[id].x = newX;
  widgets[id].width = newWidth;

  return widgets;
}

export const resizeWidthFromTop = (widgets, id, deltaY) => {
  const target = widgets[id];
  const {height, y, minHeight} = target;

  const newHeight = height - deltaY < minHeight ? minHeight : height - deltaY;
  const newY = y + deltaY < 0 ? 0 : y + deltaY;
  widgets[id].y = newY;
  widgets[id].height = newHeight;
  return widgets;
}
