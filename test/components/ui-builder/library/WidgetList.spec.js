import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

import WidgetList from '../../../../src/components/ui-builder/library/WidgetList.jsx';
import WidgetListItem from '../../../../src/components/ui-builder/library/WidgetListItem.jsx';

import {expect} from 'chai';

describe('WidgetList Component Test', () => {
  const widgetLib = {
    group1: {
      name: 'Test group 1',
      widgets: [
        {
          name: 'test-widget-1-1',
          iconText: 'test-icon-text-1-1',
          display: 'Test Widget 1-1',
          description: 'A widget for test'
        }, {
          name: 'test-widget-1-2',
          iconText: 'test-icon-text-1-2',
          display: 'Test Widget 1-2',
          description: 'A widget for test'
        }
      ]
    },
    group2: {
      name: 'Test group 2',
      widgets: [
        {
          name: 'test-widget-2-1',
          iconText: 'test-icon-text-2-1',
          display: 'Test Widget 2-1',
          description: 'A widget for test'
        }, {
          name: 'test-widget-2-2',
          iconText: 'test-icon-text-2-2',
          display: 'Test Widget 2-2',
          description: 'A widget for test'
        }
      ]
    }
  }

  const emptyWidgetLib = {};

  it('should render a list of widget items with separator', () => {
    const widgetList = renderIntoDocument(<WidgetList widgetLib={widgetLib} />);
    expect(widgetList).not.be.null;
    const widgetItems = scryRenderedComponentsWithType(widgetList, WidgetListItem);
    expect(widgetItems.length).to.equal(4);

    const groupSeparators = scryRenderedDOMComponentsWithClass(widgetList, 'list-group-separator');
    expect(groupSeparators.length).to.equal(1);
  });

  it('should have no widget item', () => {
    const widgetList = renderIntoDocument(<WidgetList widgetLib={emptyWidgetLib} />);
    expect(widgetList).not.be.null;
    const widgetItems = scryRenderedComponentsWithType(widgetList, WidgetListItem);
    expect(widgetItems.length).to.equal(0);
  });
});
