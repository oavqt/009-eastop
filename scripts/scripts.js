//ets
//generate grid
const container__grid = document.querySelector('.container__grid');
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

  grid__divs.forEach((div) => {
    div.addEventListener('mousedown', (e) => {
      mouse = true;
      e.preventDefault();
      div.style.backgroundColor = `${color}`;
      if (opacity.checked) {
        if (div.style.opacity >= 1) {
          div.style.opacity = 0;
        } else {
          div.style.opacity = (+div.style.opacity + 0.1).toFixed(1);
        }
      } else {
        div.style.opacity = 1;
      }
    });
  });

  grid__divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      if (mouse === true) {
        div.style.backgroundColor = `${color}`;
        if (opacity.checked) {
          if (div.style.opacity < 1) {
            div.style.opacity = (+div.style.opacity + 0.1).toFixed(1);
            console.log(div.style.opacity);
          }
        } else {
          div.style.opacity = 1;
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

colorGrid();
// update grid interface according to user input
slider.addEventListener('input', (e) => {
  e.preventDefault();
  updateGrid();
  updateSliderCount();
});

function updateGrid() {
  container__grid__one.style.gridTemplate = `repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`;
  container__grid__two.style.gridTemplate = `repeat(${gridDimensions}, 1fr) / repeat(${gridDimensions}, 1fr)`;
}

const slider__number = document.querySelector(
  '.container__right__slider__number'
);

function updateSliderCount() {
  slider__number.textContent = String(gridDimensions);
}

const reset = document.querySelector('.container__right__reset');

reset.addEventListener('click', resetGrid);

function resetGrid() {
  let = container__grid__divs = document.querySelectorAll(
    '.container__grid__divs'
  );

  let grid__divs = [...container__grid__divs];

  grid__divs.forEach((div) => {
    div.setAttribute('style', 'background-color: white');
  });
}

const changeBackground = document.querySelector(
  '.container__right__color__background'
);

changeBackground.addEventListener('change', (e) => {
  container__grid__one.style.backgroundColor = `${e.target.value}`;
  container__grid__two.style.backgroundColor = `${e.target.value}`;
});

const opacity = document.querySelector('.container__right__opacity');
