const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');
let modeVal = document.getElementsByTagName('option');

const max = 8;
const min = 1;

var a = undefined;
var m = undefined;
var x = undefined;

let tilesChecked = [];

let arr = [];

let mat = Math.floor(Math.random() * (max - min) + min);

function shuffle(arr) {
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

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

const click = function() {
  if (modeVal[x].label === 'Easy') {
    y = 4;
    m = 'e';
  } else if (modeVal[x].label === 'Medium') {
    y = 8;
    m = 'm';
  } else if (modeVal[x].label === 'Hard') {
    y = 16;
    m = 'h';
  } else {
    alert('error');
  }
  for (let i = 0; i < y / 2; i++) {
    let a = tiles.splice(
      Math.floor(Math.random() * (tiles.length - 1) + 1),
      1
    )[0];
    arr.push(a);
    arr.push(a);
    shuffle(arr);
  }
  for (let i = 0; i < y; i++) {
    var tl = document.createElement('div');
    tl.className = `${m}tile`;
    tl.innerHTML = `<img src=${arr[i]} class="display-none" id='a'/> <img src=tile.png class="display" id='a' >`;
    a = i;
    tl.id = i;
    tile.appendChild(tl);

    tl.addEventListener('click', clicked);
  }
};

const clicked = function(e) {
  e.target.className = 'display-none';
  e.target.previousElementSibling.className = 'display';
  tilesChecked.push(e.target.previousElementSibling.src);
  console.log(tilesChecked[0]);
  console.log(tilesChecked[1]);
  if (tilesChecked.length === 2)
    if (tilesChecked[0] === tilesChecked[1]) {
      deleteTiles();
      //e.target.previousElementSibling = null;
      //tilesChecked[0].remove();
      //tilesChecked[1].remove();
      //console.log(tilesChecked);
      //tilesChecked = [];
    }
};

let deleteTiles = function() {
  tilesChecked[0].remove();
  tilesChecked[1].remove();
  console.log(tilesChecked);
  tilesChecked = [];
};

btn.addEventListener('click', click);

let tiles = [
  'tile_1.png',
  'tile_2.png',
  'tile_3.png',
  'tile_4.png',
  'tile_5.png',
  'tile_6.png',
  'tile_7.png',
  'tile_8.png',
  'tile_9.png',
  'tile_10.png'
];
