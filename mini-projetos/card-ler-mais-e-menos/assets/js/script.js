'use strict';

function toggleCardState() {
  const card = document.querySelector('.card');
  card.classList.toggle('active');
}

const button = document.querySelector('#read-button');
button.addEventListener('click', toggleCardState);