export const getTopMargin = (reactDomElement) => {
  return parseInt(document.defaultView.getComputedStyle(reactDomElement, '').getPropertyValue('margin-top'));
}

export const getBottomMargin = (reactDomElement) => {
  return parseInt(document.defaultView.getComputedStyle(reactDomElement, '').getPropertyValue('margin-bottom'));
}

export const getTopBottomMargin = (reactDomElement) => {
  return getTopMargin(reactDomElement) + getBottomMargin(reactDomElement);
}
