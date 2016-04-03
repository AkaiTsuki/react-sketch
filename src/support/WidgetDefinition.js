const WidgetDefinition = {
  text : {
    displayName: 'Text Widgets',
    widgets: [
      {
        name: 'title',
        iconText: 'title',
        display: 'Title',
        description: 'Title widget can be one of h1, h2, h3, h4, h5, h6'
      }, {
        name: 'label',
        iconText: 'label',
        display: 'Label',
        description: 'Label widget can be used with form input'
      }
    ]
  },
  "formControl": {
    name: "Form Control Widgets",
    widgets: [
      {
        name: 'input-text',
        iconText: 'text_fields',
        display: "Input - Text",
        description: 'Text input field'
      },{
        name: 'input-radio',
        iconText: 'radio_button_checked',
        display: "Input - Radio",
        description: 'Radio Button Input Field'
      },{
        name: 'input-checkbox',
        iconText: 'check_box',
        display: "Input - Checkbox",
        description: 'Checkbox Input Field'
      },{
        name: 'input-dropdown',
        iconText: 'format_line_spacing',
        display: "Input - Dropdown Select",
        description: 'Dropdown Select Input Field'
      },{
        name: 'input-textarea',
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
        name: 'panel',
        iconText: 'content_copy',
        display: "Panel",
        description: 'Panel to group widgets'
      }
    ]
  }
};

export default WidgetDefinition;
