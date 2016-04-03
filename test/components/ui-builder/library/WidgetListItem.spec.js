import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

import WidgetListItem from '../../../../src/components/ui-builder/library/WidgetListItem.jsx';

import {expect} from 'chai';

describe('WidgetListItem Component Test', () => {

  const widget = {
    name: 'test-widget',
    iconText: 'test-icon-text',
    display: 'Test Widget',
    description: 'A widget for test'
  };

  let renderedItem = null;

  before(function() {
    renderedItem = renderIntoDocument(<WidgetListItem widget={widget} />);
    expect(renderedItem).not.be.null;
  });

  it('should render a widget item', () => {
    const listGroupItem = scryRenderedDOMComponentsWithClass(renderedItem, 'list-group-item');
    expect(listGroupItem.length).to.equal(1);
  });

  it('should have meterial icons', () => {
    const icons = scryRenderedDOMComponentsWithClass(renderedItem, 'material-icons');
    expect(icons.length).to.equal(2);
    expect(icons[0].textContent).to.equal(widget.iconText);
    expect(icons[1].textContent).to.equal('add_circle');
  });

  it('should have widget display name', () => {
    const displayNameElement = findRenderedDOMComponentWithClass(renderedItem, 'list-group-item-heading');
    expect(displayNameElement).not.be.null;
    expect(displayNameElement.textContent).to.equal(widget.display);
  });

  it('should have widget description', () => {
    const descriptionElement = findRenderedDOMComponentWithClass(renderedItem, 'list-group-item-text');
    expect(descriptionElement).not.be.null;
    expect(descriptionElement.textContent).to.equal(widget.description);
  });
});
