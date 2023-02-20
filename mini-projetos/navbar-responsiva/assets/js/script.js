'use strict';

const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

function toggleMenuVisibility() {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
}

hamburguer.addEventListener('click', () => toggleMenuVisibility());