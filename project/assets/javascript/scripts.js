const btn = Array.from(document.querySelectorAll(".accordion__btn"));
const title = Array.from(document.querySelectorAll(".accordion__title"));
const icon = Array.from(document.querySelectorAll(".accordion__image"));
const paragraph = Array.from(document.querySelectorAll(".accordion__paragraph"));

for (const i in btn) {
  btn[i].addEventListener("click", () => {
    title[i].classList.toggle("accordion__title--active");
    icon[i].classList.toggle("accordion__image--active");
    paragraph[i].classList.toggle("accordion__paragraph--active");
  });
}
