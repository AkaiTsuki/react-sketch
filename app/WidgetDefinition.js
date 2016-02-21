import * as WIDGET_TYPE from './constants/WidgetType';

const WidgetDefinition = {
  text : {
    name: "Text Widgets",
    widgets : [
      {
        name: WIDGET_TYPE.WIDGET_TITLE,
        icon: 'fa fa-header',
        display: 'Title',
        action: 'createTitle',
        enable: true
      },{
        name: WIDGET_TYPE.WIDGET_LABEL,
        icon: 'fa fa-font',
        display: 'Label',
        action: 'createLabel',
        enable: true
      }
    ]
  },
  "formControl": {
    name: "Form Control Widgets",
    widgets: [
      {
        name: WIDGET_TYPE.WIDGET_INPUT_TEXT,
        icon: 'fa fa-pencil-square-o',
        display: "Input - Text",
        action: 'createTextInput',
        enable: true
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_RADIO,
        icon: 'fa fa-dot-circle-o',
        display: "Radio",
        enable: false
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_CHECKBOX,
        icon: 'fa fa-check-square',
        display: "Checkbox",
        enable: false
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_PASSWORD,
        icon: 'fa fa-lock',
        display: "Password",
        enable: false
      },{
        name: WIDGET_TYPE.WIDGET_INPUT_TEXTAREA,
        icon: 'fa fa-align-justify',
        display: "Text Area",
        enable: false
      }
    ]
  },
  "container": {
    name: "Container Widgets",
    widgets: [
      {
        name: WIDGET_TYPE.WIDGET_PANEL,
        icon: 'fa fa-columns',
        display: "Outline",
        action: 'createPanel',
        enable: true
      }
    ]
  }
}

export default WidgetDefinition;
