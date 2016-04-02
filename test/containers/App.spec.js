import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import App from '../../src/containers/App';
import {expect} from 'chai';

describe('App', () => {
  it('renders a header', () => {
    const component = renderIntoDocument(
      <App />
    );

    const headers = scryRenderedDOMComponentsWithTag(component, 'h2');
    expect(headers.length).to.equal(1);
    expect(headers[0].textContent).to.equal('Hello React');
  });
});
