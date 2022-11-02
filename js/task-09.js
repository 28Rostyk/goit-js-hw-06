function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.body;

button.addEventListener("click", onClickBtnChangeColour);

function onClickBtnChangeColour() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}
