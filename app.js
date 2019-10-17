const tile = document.querySelector('.game-board');
const btn = document.querySelector('.game-start');
let modeVal = document.getElementsByTagName('option');

const max = 8;
const min = 1;

var x = undefined;
var y = undefined;
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
      tl.className = 'etile';
      tl.innerHTML = `<img src=${arr[i]} />`;
      console.log(tl.innerHTML);
      tile.appendChild(tl);
    }
  } else if (modeVal[x].label === 'Medium') {
    y = 8;
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
      tl.className = 'mtile';
      tl.innerHTML = `<img src=${arr[i]} />`;
      console.log(tl.innerHTML);
      tile.appendChild(tl);
    }
  } else if (modeVal[x].label === 'Hard') {
    y = 16;
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
      tl.className = 'htile';
      tl.innerHTML = `<img src=${arr[i]} />`;
      console.log(arr[i]);
      tile.appendChild(tl);
    }
  } else {
    alert('error');
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
