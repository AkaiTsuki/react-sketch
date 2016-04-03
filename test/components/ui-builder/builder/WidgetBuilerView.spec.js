import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';

import {
  renderIntoDocument,
  findRenderedComponentWithType
} from 'react-addons-test-utils';

import WidgetBuilderView from '../../../../src/components/ui-builder/builder/WidgetBuilderView';
import Canvas from '../../../../src/components/ui-builder/builder/Canvas';

describe('WidgetBuilderView Compoent', () => {
  const fakeSystemConfig = {
    canvas: {
      width: 100,
      height: 100
    }
  };

  let view = null;

  before(function() {
    view = renderIntoDocument(<WidgetBuilderView systemConfig={fakeSystemConfig}/>);
    expect(view).not.be.null;
  });

  it('should render a builder view with canvas inside it', () => {
    const canvas = findRenderedComponentWithType(view, Canvas);
    expect(canvas).not.be.null;

  });
});
