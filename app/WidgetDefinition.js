import * as WIDGET_TYPE from './constants/WidgetType';

const WidgetDefinition = {
  text : {
    name: "Text Widgets",
    widgets : [
      {
        name: WIDGET_TYPE.WIDGET_TITLE,
        icon: 'fa fa-header',
        display: 'Title',
        action: 'createTitle'
      },{
        name: WIDGET_TYPE.WIDGET_LABEL,
        icon: 'fa fa-font',
        display: 'Label',
        action: 'createLabel'
      }
    ]
  },
  "formControl": {
    name: "Form Control Widgets",
    widgets: [
      {
        name: WIDGET_TYPE.WIDGET_INPUT_TEXT,
        icon: 'fa fa-pencil-square-o',
        display: "Input Text Field",
        action: 'createTextInput'
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_RADIO,
        icon: 'fa fa-dot-circle-o',
        display: "Input Radio Button"
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_CHECKBOX,
        icon: 'fa fa-check-square',
        display: "Input Checkbox"
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_PASSWORD,
        icon: 'fa fa-lock',
        display: "Input Password"
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_TEXTAREA,
        icon: 'fa fa-align-justify',
        display: "Input Text Area"
      }
    ]
  }
}

export default WidgetDefinition;
