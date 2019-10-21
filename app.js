const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');
let modeVal = document.getElementsByTagName('option');
let option = document.getElementById('#o1');
let score = document.querySelector('.game-score');

const max = 8;
const min = 1;

let tilePairs = 0;
let tileCount = 0;
let moveCount = null;

var a = undefined;
var m = undefined;
var x = 0;

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
      tileCount = 4;
    } else if (e.target.value === 'medium') {
      x = 2;
      tileCount = 8;
    } else if (e.target.value === 'hard') {
      x = 3;
      tileCount = 16;
    } else {
      x = 0;
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
    y = 0;
    alert('pick one!!!');
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
  tilesChecked.push(e.target);
  if (tilesChecked.length === 2) {
    moveCount++;
    //console.log(score);
    score.innerText = moveCount;
    let resetTiles = function() {
      tilesChecked[0].previousElementSibling.className = 'display-none';
      tilesChecked[0].className = 'display';
      tilesChecked[1].previousElementSibling.className = 'display-none';
      tilesChecked[1].className = 'display';
      tilesChecked = [];
    };
    let deleteTiles = function() {
      tilesChecked[0].previousElementSibling.remove();
      tilesChecked[1].previousElementSibling.remove();
      console.log(tilesChecked);
      tilesChecked = [];
      tilePairs++;
      if (tilePairs >= tileCount / 2) {
        alert('Gratki');

        //tile.innerHTML = '';
        select('mod', 'Pick mode');
        location.reload();

        //if (tile.innerHTML === '') {
        //y = undefined;
        // m = undefined;
        //}
      }
    };
    if (
      tilesChecked[0].previousElementSibling.src ===
      tilesChecked[1].previousElementSibling.src
    ) {
      console.log('deleteTiles');
      setTimeout(deleteTiles, 500);
      //e.target.previousElementSibling = null;
      //tilesChecked[0].remove();
      //tilesChecked[1].remove();
      //console.log(tilesChecked);
      //tilesChecked = [];
    } else {
      console.log('resetTiles');
      setTimeout(resetTiles, 500);
      console.log(tilesChecked);
      //resetTiles();
    }
  }
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

function select(selectId, optionValToSelect) {
  var selectElement = document.getElementById(selectId);
  var selectOptions = selectElement.options;
  for (var opt, j = 0; (opt = selectOptions[j]); j++) {
    if (opt.value == optionValToSelect) {
      selectElement.selectedIndex = j;
      break;
    }
  }
}
