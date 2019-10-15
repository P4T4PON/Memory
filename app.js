const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');

const max = 8;
const min = 1;

let tl = document.createElement('div');
tl.className = 'tile';
tl.innerHTML =
  '<img src=title_' + Math.floor(Math.random() * (max - min) + min) + '.png >';

const click = function() {
  document.querySelector('.game-board').appendChild(tl);
};

btn.addEventListener('click', click);

const tiles = [
  'tile_1.png',
  'tile_2.png',
  'tile_3.png',
  'tile_4.png',
  'tile_5.png',
  'tile_6.png',
  'tile_7.png',
  'tile_8.png'
];
