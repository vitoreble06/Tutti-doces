document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.menu');

  burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnBurgerMenu = burgerMenu.contains(event.target);

    if (!isClickInsideMenu && !isClickOnBurgerMenu) {
      navLinks.classList.remove('show');
    }
  });

  // Adiciona um ouvinte de eventos para fechar o menu ao clicar em um link
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('show');
    });
  });
});
