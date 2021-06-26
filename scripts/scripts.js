//ets

//generate the grid

const container__grid = document.querySelector('.container__grid');
const container__grid__one = document.querySelector('.container__grid__one');
const container__grid__two = document.querySelector('.container__grid__two');

let gridDimensions = 16;

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

const slider = document.querySelector('.container__right__slider');

slider.addEventListener('input', (e) => {
  e.preventDefault();
  deleteGrid();
  gridDimensions = slider.value;
  createGrid();
  colorGrid();
});

//add mouse events to color the grid when the user interacts with the grid

const colorPicker = document.querySelector('.container__right__color');
const opacity = document.querySelector('.container__right__opacity');
const random = document.querySelector('.container__right__random');
const eraser = document.querySelector('.container__right__eraser');

let color = 'black';

colorPicker.addEventListener('change', (e) => {
  color = e.target.value;
});

function colorGrid() {
  let = container__grid__divs = document.querySelectorAll(
    '.container__grid__divs'
  );

  let grid__divs = [...container__grid__divs];

  let mouse = false;

  grid__divs.forEach((div) => {
    div.addEventListener('mousedown', (e) => {
      mouse = true;
      e.preventDefault();
      div.style.backgroundColor = `${color}`;
      //options
      if (opacity.checked) {
        if (div.style.opacity < 1) {
          div.style.opacity = (+div.style.opacity + 0.1).toFixed(1);
        }
      } else {
        div.style.opacity = '';
      }
      if (random.checked) {
        randomColor();
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }
      if (eraser.checked) {
        div.style.backgroundColor = '';
        div.style.opacity = '';
      }
    });
  });

  grid__divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      if (mouse === true) {
        div.style.backgroundColor = `${color}`;
        //options
        if (opacity.checked) {
          if (div.style.opacity < 1) {
            div.style.opacity = (+div.style.opacity + 0.1).toFixed(1);
          }
        } else {
          div.style.opacity = '';
        }
        if (random.checked) {
          randomColor();
          div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        if (eraser.checked) {
          div.style.backgroundColor = '';
          div.style.opacity = '';
        }
      }
    });
  });

  grid__divs.forEach((div) => {
    div.addEventListener('mouseup', () => {
      if (mouse === true) {
        mouse = false;
      }
    });
  });
}

function randomColor() {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);
}

colorGrid();

// update grid interface according to user input

const slider__number = document.querySelector('.container__right__number');

const clear = document.querySelector('.container__right__clear');

const backgroundColorPicker = document.querySelector(
  '.container__right__color__background'
);

slider.addEventListener('input', (e) => {
  e.preventDefault();
  updateGrid();
  updateSliderCount();
});

clear.addEventListener('click', clearGrid);

backgroundColorPicker.addEventListener('change', (e) => {
  container__grid__one.style.backgroundColor = `${e.target.value}`;
  container__grid__two.style.backgroundColor = `${e.target.value}`;
});

function updateGrid() {
  container__grid__one.style.gridTemplate = `repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`;
  container__grid__two.style.gridTemplate = `repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`;
}

function updateSliderCount() {
  slider__number.textContent = String(gridDimensions);
}

function clearGrid() {
  let = container__grid__divs = document.querySelectorAll(
    '.container__grid__divs'
  );

  let grid__divs = [...container__grid__divs];

  grid__divs.forEach((div) => {
    div.setAttribute('style', 'background-color: white');
  });
}
