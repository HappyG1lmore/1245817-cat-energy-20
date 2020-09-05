const beforeCat = document.querySelector(".exemplar__picture--before");
const afterCat = document.querySelector(".exemplar__picture--after");

const beforeBtn = document.querySelector(".exemplar__btn-result--before");
const afterBtn = document.querySelector(".exemplar__btn-result--after");

beforeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  beforeCat.classList.remove("visuallyhidden");
  afterCat.classList.add("visuallyhidden");
})

afterBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  afterCat.classList.remove("visuallyhidden");
  beforeCat.classList.add("visuallyhidden");
})

