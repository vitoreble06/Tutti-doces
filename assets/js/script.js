document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.menu');
  
    burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  });