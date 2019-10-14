const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');

let tl = document.createElement('div');
tl.innerHTML = '<img src="title.png" >';

const click = function() {
  document.querySelector('.game-board').appendChild(tl);
};

btn.addEventListener('click', click);
