// Grabing things
const gameBoard = document.querySelector('.game-board');
const PlayButton = document.querySelector('.game-start');
let levelOfDifficulty = document.getElementsByTagName('option');
let score = document.querySelector('.game-score');

// img array
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

//STARTING VALUES

// math.random max and min value
const max = 8;
const min = 1;

// pairs of images found
let tilePairs = 0;

// how many tiles to create
let tileCount = 0;

// how many moves did we do
let moveCount = null;

// return's different value for each level of difficulty we chose
var gameMode = undefined;

// return's index of option
var optionIndex = 0;

// if ypu click on tile push the target to this array
let tilesChecked = [];

// array for images gruped in pairs
let arr = [];

// returns random number beetwen 1 and 8
let mat = Math.floor(Math.random() * (max - min) + min);

// FUNCTIONS

// when you win set select value to "pick one"
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

// shuffle images in array
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

// when you select difficulty level change these values
document.addEventListener(
  'input',
  function(e) {
    if (e.target.value === 'easy') {
      optionIndex = 1;
      tileCount = 4;
    } else if (e.target.value === 'medium') {
      optionIndex = 2;
      tileCount = 8;
    } else if (e.target.value === 'hard') {
      optionIndex = 3;
      tileCount = 16;
    } else {
      optionIndex = 0;
    }
  },
  false
);

// when you click Play change these values
const click = function() {
  if (levelOfDifficulty[optionIndex].label === 'Easy') {
    divClass = 'e';
  } else if (levelOfDifficulty[optionIndex].label === 'Medium') {
    divClass = 'm';
  } else if (levelOfDifficulty[optionIndex].label === 'Hard') {
    divClass = 'h';
  } else {
    alert('pick one!!!');
  }
  // pick random images in pairs from "tiles" and push them to "arr" array then shuffle them
  for (let i = 0; i < tileCount / 2; i++) {
    let a = tiles.splice(
      Math.floor(Math.random() * (tiles.length - 1) + 1),
      1
    )[0];
    arr.push(a);
    arr.push(a);
    shuffle(arr);
  }
  // create div's give them class and put images from arr in them
  for (let i = 0; i < tileCount; i++) {
    var createDiv = document.createElement('div');
    // takes value from select and returns class for div's
    createDiv.className = `${divClass}tile`;
    // change empty div for div with hidden image and default tile image
    createDiv.innerHTML = `<img src=${arr[i]} class="display-none"/> <img src=tile.png class="display">`;
    createDiv.id = i;
    gameBoard.appendChild(createDiv);

    createDiv.addEventListener('click', changeStylesOfImages);
  }
};

// when you click image change its class
const changeStylesOfImages = function(e) {
  e.target.className = 'display-none';
  e.target.previousElementSibling.className = 'display';
  tilesChecked.push(e.target);
  //if array "tilesChecked" has 2 elements in it
  if (tilesChecked.length === 2) {
    moveCount++;
    score.innerText = moveCount;
    // change classes of images in div
    let resetTiles = function() {
      tilesChecked[0].previousElementSibling.className = 'display-none';
      tilesChecked[0].className = 'display';
      tilesChecked[1].previousElementSibling.className = 'display-none';
      tilesChecked[1].className = 'display';
      tilesChecked = [];
    };
    // delete elements from "tilesChecked" array
    let deleteTiles = function() {
      tilesChecked[0].previousElementSibling.remove();
      tilesChecked[1].previousElementSibling.remove();
      console.log(tilesChecked);
      tilesChecked = [];
      tilePairs++;
      //if there are no more elements on game board end game
      if (tilePairs >= tileCount / 2) {
        alert('Gratki');
        select('mod', 'Pick mode');
        location.reload();
      }
    };
    if (
      // if we find 2 the same images
      tilesChecked[0].previousElementSibling.src ===
      tilesChecked[1].previousElementSibling.src
    ) {
      setTimeout(deleteTiles, 500);
    } else {
      // if we didn't found 2 the same images
      setTimeout(resetTiles, 500);
    }
  }
};

// give button "Play" functionality when clicked
PlayButton.addEventListener('click', click);
