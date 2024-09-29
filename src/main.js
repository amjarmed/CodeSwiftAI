(function mobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    menu.classList.replace('-top-full', 'top-10');
    body.classList.toggle('overflow-hidden');
  });
})();
