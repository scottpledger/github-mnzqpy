import _ from 'lodash';

export function second() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['SECOND', 'webpack'], ' ');

  return element;
}
