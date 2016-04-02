// use jsdom a pure JavaScript DOM implementation, to avoid run test in browser
import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

// create jsdom versions of the document and window objects that would normally
// be provided by the web browser
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// put them on the global object, so that they will be discovered by React
global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);
