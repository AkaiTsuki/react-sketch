export function createTitle(x, y){
  return (dispatch, getState) => {
    const action = {
      type: 'NEW_TITLE',
      dom : 'h1',
      text: 'Input Title Text'
    };
    dispatch(action);
  }
}

export function createLabel(x, y){
  return (dispatch, getState) => {
    console.log("Create Label")
  }
}
