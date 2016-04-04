import * as ActionNames from '../constants/ActionNames';

export const addWidget = (widgetName) => {
  return {
    type: ActionNames.ADD_WIDGET,
    widgetName: widgetName
  };
}
