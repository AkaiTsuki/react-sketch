const layout = {
  nextY: 0,
  maxWidgetId: null
};

export const getNextYPosition = (){
  return layout.nextY;
}

export const updateNextYPosition = (height){
  layout.nextY = layout.nextY + height;
}
