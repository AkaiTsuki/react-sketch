import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';

import {
  renderIntoDocument,
  scryRenderedComponentsWithType,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';

import Canvas from '../../../../src/components/ui-builder/builder/Canvas';

describe('Canvas Compoent', () => {
  const fakeCanvasConfig = {
    width: 100,
    height: 100
  };

  let canvas = null;

  before(function() {
    canvas = renderIntoDocument(<Canvas canvasConfig={fakeCanvasConfig}/>);
    expect(canvas).not.be.null;
  });

  it('should render a canvas with given config', () => {
    const foundCanvas = scryRenderedDOMComponentsWithClass(canvas, 'canvas');
    expect(foundCanvas.length).to.equal(1);
  });
});
