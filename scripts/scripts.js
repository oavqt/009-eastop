//ets
//generate grid
const container__grid__one = document.querySelector('.container__grid__one');
const container__grid__two = document.querySelector('.container__grid__two');
const slider = document.querySelector('.container__right__slider');

let gridDimensions = 16;

let color = 'black';

function createGrid() {
  for (let i = 0; i < gridDimensions ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('container__grid__divs');
    container__grid__one.appendChild(div);
  }
  for (let i = 0; i < gridDimensions ** 2; i++) {
    let div = document.createElement('div');
    div.classList.add('container__grid__divs');
    container__grid__two.appendChild(div);
  }
}

createGrid();

function deleteGrid() {
  while (container__grid__one.firstChild) {
    container__grid__one.removeChild(container__grid__one.firstChild);
  }
  while (container__grid__two.firstChild) {
    container__grid__two.removeChild(container__grid__two.firstChild);
  }
}

slider.addEventListener('input', (e) => {
  e.preventDefault();
  deleteGrid();
  gridDimensions = document.querySelector('.container__right__slider').value;
  createGrid();
  colorGrid();
});

//add event to shade/color grid when clicked/moused over
const changeColor = document.querySelector('.container__right__color');

changeColor.addEventListener('change', (e) => {
  color = e.target.value;
});

function colorGrid() {
  let = container__grid__divs = document.querySelectorAll(
    '.container__grid__divs'
  );

  let grid__divs = [...container__grid__divs];

  let mouse = false;

  grid__divs.forEach((square) => {
    square.addEventListener('mousedown', (e) => {
      mouse = true;
      square.setAttribute('style', `background-color: ${color}`);
      e.preventDefault();
    });
  });

  grid__divs.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      if (mouse === true) {
        square.setAttribute('style', `background-color: ${color}`);
      }
    });
  });

  grid__divs.forEach((square) => {
    square.addEventListener('mouseup', () => {
      if (mouse === true) {
        mouse = false;
      }
    });
  });
}

colorGrid();
// update grid interface according to user input
slider.addEventListener('input', (e) => {
  e.preventDefault();
  updateGrid();
});

function updateGrid() {
  container__grid__one.setAttribute(
    'style',
    `grid-template: repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`
  );
  container__grid__two.setAttribute(
    'style',
    `grid-template: repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`
  );
}


