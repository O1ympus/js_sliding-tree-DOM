'use strict';

const ul = document.querySelector('.tree');

ul.addEventListener('click', (e) => {
  const liTarget = e.target.closest('li');

  if (!liTarget || e.target.tagName !== 'SPAN') {
    return;
  }

  const ulTarget = liTarget.querySelector('ul');

  if (!ulTarget) {
    return;
  }

  const computedDisplay = getComputedStyle(ulTarget).display;

  ulTarget.style.display = computedDisplay === 'none' ? 'block' : 'none';
});
