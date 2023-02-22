'use strict';

const timeout = 3000;
let count = 1;
let loopMain;

function labelOnClick(id) {
  clearTimeout(loopMain);
  const idNumber = id.split('-')[1];
  count = Number(idNumber);
  activeLabel(id);
}

function activeLabel(id) {
  const labels = document.querySelectorAll('.navigation label');
  for (const label of labels) {
    label.classList.remove('active');
  }
  const label = document.querySelector(`#${id}`);
  label.classList.add('active');
}

function main() {
  if(count === 5 ){
    count = 1;
  }
  activeLabel(`label-${count}`);
  const radio = document.querySelector(`#radio-${count}`);
  radio.checked = true;
  count += 1;
  loopMain = setTimeout(() => main(), timeout);
}

function init() {
  const labels = document.querySelectorAll('.navigation label');
  for (const label of labels) {
    label.addEventListener('click', event => labelOnClick(event.target.id));
  }
  main();
}

init();