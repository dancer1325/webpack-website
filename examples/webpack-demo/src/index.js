import _ from 'lodash';   // 2. importing lodash

function component() {
  const element = document.createElement('div');

  // 1. Lodash, currently included via a script -> NO explicitly declared == implicit dependencies
  // _    required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
