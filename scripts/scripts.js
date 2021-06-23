//
//ets
//generate grid
const container__grid = document.querySelector('.container__grid');

let gridDimensions = 16;

function createGrid() {
  for (let i = 0; i < gridDimensions ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('container__grid__square');
    container__grid.appendChild(div);
  }
}

createGrid();

//add event to shade grid when clicked/moused over
const container__grid__square = document.querySelectorAll(
  '.container__grid__square'
);

const grid__square = [...container__grid__square];

function squareFill() {
  let mouse = false;
  let color = 'red';

  grid__square.forEach((square) => {
    square.addEventListener('mousedown', (e) => {
      mouse = true;
      square.setAttribute('style', `background-color: ${color}`);
      e.stopPropagation();
    });
  });

  grid__square.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      if (mouse === true) {
        square.setAttribute('style', `background-color: ${color}`);
        e.stopPropagation();
      }
    });
  });

  grid__square.forEach((square) => {
    square.addEventListener('mouseup', () => {
      if (mouse === true) {
        mouse = false;
      }
    });
  });
}

squareFill();
