import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedComponentsWithType
} from 'react-addons-test-utils';

import App from '../../src/components/App';
import Navi from '../../src/components/navi/Navi';
import UIBuilder from '../../src/components/ui-builder/UIBuilder';
import {expect} from 'chai';

describe('App Component', () => {

  let app = null;
  const fakeSystemConfig = {
    canvas: {
      width: 100,
      height: 100
    }
  }

  before(function() {
    app = renderIntoDocument(<App systemConfig={fakeSystemConfig}/>);
    expect(app).not.be.null;
  });

  it('should have a navi bar', () => {

    const navis = scryRenderedComponentsWithType(app, Navi);
    expect(navis.length).to.equal(1);

  });

  it('should have a ui builder', () => {

    const builders = scryRenderedComponentsWithType(app, UIBuilder);
    expect(builders.length).to.equal(1);

  });
});
