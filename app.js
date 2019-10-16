const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');
let modeVal = document.getElementsByTagName('option');

var x = undefined;
var y = undefined;

document.addEventListener(
  'input',
  function(e) {
    if (e.target.value === 'easy') {
      x = 1;
    } else if (e.target.value === 'medium') {
      x = 2;
    } else if (e.target.value === 'hard') {
      x = 3;
    } else {
      x = undefined;
    }
  },
  false
);

//modeVal = modeVal[x].label;

const max = 8;
const min = 1;

let tl = document.createElement('div');
tl.className = 'tile';
tl.innerHTML =
  '<img src=title_' + Math.floor(Math.random() * (max - min) + min) + '.png >';

const click = function() {
  if (modeVal[x].label === 'Easy') {
    y = 4;
  } else if (modeVal[x].label === 'Medium') {
    y = 8;
  } else if (modeVal[x].label === 'Hard') {
    y = 16;
  } else {
    alert('error');
  }
  for (let i = 0; i <= y; i++) {
    tile.appendChild(tl);
  }
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
