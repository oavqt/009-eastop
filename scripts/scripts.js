//
//ets
//generate grid
const container__grids__one = document.querySelector('.container__grids__one');
const container__grids__two = document.querySelector('.container__grids__two');
const slider = document.querySelector('.container__right__slider');

let gridDimensions = 50;

function createGrid() {
  for (let i = 0; i < gridDimensions ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('container__grid__square');
    container__grids__one.appendChild(div);
  }
  for (let i = 0; i < gridDimensions ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('container__grid__square');
    container__grids__two.appendChild(div);
  }
}

createGrid();

function deleteGrid() {
  while (container__grids__one.firstChild) {
    container__grids__one.removeChild(container__grids__one.firstChild);
  }
  while (container__grids__two.firstChild) {
    container__grids__two.removeChild(container__grids__two.firstChild);
  }
}

slider.addEventListener('input', (e) => {
  e.preventDefault();
  deleteGrid();
  gridDimensions = document.querySelector('.container__right__slider').value;
  createGrid();
  colorGrid();
});

// function getSquareGrids(){
//   container__grids__square = document.querySelectorAll(
//     '.container__grid__square'
//   );

//   grids__square = [...container__grids__square];
// }

//add event to shade/color grid when clicked/moused over

function colorGrid() {
  let = container__grids__square = document.querySelectorAll(
    '.container__grid__square'
  );

  let grids__square = [...container__grids__square];

  let mouse = false;
  let color = 'red';

  grids__square.forEach((square) => {
    square.addEventListener('mousedown', (e) => {
      mouse = true;
      square.setAttribute('style', `background-color: ${color}`);
      e.preventDefault();
    });
  });

  grids__square.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      if (mouse === true) {
        square.setAttribute('style', `background-color: ${color}`);
      }
    });
  });

  grids__square.forEach((square) => {
    square.addEventListener('mouseup', () => {
      if (mouse === true) {
        mouse = false;
      }
    });
  });
}

colorGrid()
//
