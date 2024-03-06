/// <reference types="webpack/module" />
import _ from 'lodash';
import { second } from './second';

async function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const child = await new Promise<HTMLDivElement>((resolve) => {
    require.ensure(
      [],
      (require) => {
        resolve(second());
      },
      null,
      'second-chunk'
    );
  });

  element.appendChild(child);

  return element;
}

async function main() {
  document.body.appendChild(await component());
}

main();
