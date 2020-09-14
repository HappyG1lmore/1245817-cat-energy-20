const beforeCat = document.querySelector(".exemplar__picture--before");
const afterCat = document.querySelector(".exemplar__picture--after");

const beforeBtn = document.querySelector(".exemplar__btn-result--before");
const afterBtn = document.querySelector(".exemplar__btn-result--after");

const togle = document.querySelector(".exemplar__togle");
const togleAfter = document.querySelector(".exemplar__togle--after");

beforeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log('click');
  beforeCat.classList.remove("visuallyhidden");
  afterCat.classList.add("visuallyhidden");
  togle.classList.remove("exemplar__togle--after");
})

afterBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log('click');
  afterCat.classList.remove("visuallyhidden");
  beforeCat.classList.add("visuallyhidden");
  togle.classList.add("exemplar__togle--after");
})



