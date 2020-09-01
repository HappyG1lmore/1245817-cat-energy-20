document.addEventListener("DOMContentLoaded", () => {

var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__button');
var navButton2 = document.querySelector('.main-nav__button--btn');

navButton2.classList.remove('main-nav__button--btn');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navButton.addEventListener('click', function() {
  navMain.classList.toggle ('main-nav--closed');
  navMain.classList.toggle ('main-nav--opened');
});

});
