// In your JavaScript file
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuItems = document.querySelector('.menu-items');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  menuItems.classList.toggle('open');
});
