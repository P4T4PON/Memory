const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');

let modeVal = document.getElementsByTagName('option');
//console.log(modeVal[0].label);
let x = null;

document.addEventListener(
  'input',
  function(event) {
    if (event.target.id !== 'mod') return;

    if (event.target.value === 'easy') {
      x = 0;
    }
    if (event.target.value === 'medium') {
      x = 1;
    }
    if (event.target.value === 'hard') {
      x = 2;
    }
  },
  false
);

console.log(x);
/*
modeVal = modeVal[x].label;

if (modeVal[x] === 'Easy') {
  modeVal = 4;
} else if (modeVal[x] === 'Medium') {
  modeVal = 8;
} else if (modeVal[x] === 'Hard') {
  modeVal = 16;
} else {
  alert('error');
}
//console.log(modeVal);
*/
const max = 8;
const min = 1;

let tl = document.createElement('div');
tl.className = 'tile';
tl.innerHTML =
  '<img src=title_' + Math.floor(Math.random() * (max - min) + min) + '.png >';

const click = function() {
  for (i = 0; i <= modeVal; i++) {
    document.querySelector('.game-board').appendChild(tl);
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
