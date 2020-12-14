const icon = document.querySelector('.fa-search');
const searchField = document.querySelector('#text-box');

icon.addEventListener('click', () => {
  searchField.classList.remove('hidden');
});