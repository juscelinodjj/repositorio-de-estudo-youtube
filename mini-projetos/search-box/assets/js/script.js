'use strict';

function toggleInputSearchVisibility() {
  const search = document.querySelector('.search');
  search.classList.toggle('active');
}

function clearInputSearch() {
  const inputSearch = document.querySelector("#inputSearch");
  inputSearch.value = '';
}

const iconSearch = document.querySelector('.icon-search');
const iconClear = document.querySelector('.icon-clear');

iconSearch.addEventListener('click', toggleInputSearchVisibility);
iconClear.addEventListener('click', toggleInputSearchVisibility);
iconClear.addEventListener('click', clearInputSearch);