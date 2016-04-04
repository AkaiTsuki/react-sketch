import * as WIDGET_NAMES from '../constants/WidgetNames';

const WidgetDefinition = {
  text : {
    displayName: 'Text Widgets',
    widgets: [
      {
        name: WIDGET_NAMES.WIDGET_TITLE,
        iconText: 'title',
        display: 'Text - Title',
        description: 'Title widget can be one of h1, h2, h3, h4, h5, h6'
      }, {
        name: WIDGET_NAMES.WIDGET_LABEL,
        iconText: 'label',
        display: 'Text - Label',
        description: 'Label widget can be used with form input'
      }
    ]
  },
  "formControl": {
    name: "Form Control Widgets",
    widgets: [
      {
        name: WIDGET_NAMES.WIDGET_INPUT_TEXT,
        iconText: 'text_fields',
        display: "Input - Text",
        description: 'Text input field'
      },{
        name: WIDGET_NAMES.WIDGET_INPUT_RADIO,
        iconText: 'radio_button_checked',
        display: "Input - Radio",
        description: 'Radio Button Input Field'
      },{
        name: WIDGET_NAMES.WIDGET_INPUT_CHECKBOX,
        iconText: 'check_box',
        display: "Input - Checkbox",
        description: 'Checkbox Input Field'
      },{
        name: WIDGET_NAMES.WIDGET_INPUT_DROPDOWN,
        iconText: 'format_line_spacing',
        display: "Input - Dropdown Select",
        description: 'Dropdown Select Input Field'
      },{
        name: WIDGET_NAMES.WIDGET_INPUT_TEXTAREA,
        iconText: 'subject',
        display: "Input - Multi-line Text",
        description: 'Text input field for multiple lines'
      }
    ]
  },
  "container": {
    name: "Container Widgets",
    widgets: [
      {
        name: WIDGET_NAMES.WIDGET_PANEL,
        iconText: 'content_copy',
        display: "Container - Panel",
        description: 'Panel to group widgets'
      }
    ]
  }
};

export default WidgetDefinition;
