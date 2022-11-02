let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const spanValueUI = document.querySelector("#value");

btnDecrement.addEventListener("click", valueDecrement);
btnIncrement.addEventListener("click", valueIncrement);

function valueDecrement() {
  counterValue -= 1;
  spanValueUI.textContent = counterValue;
}

function valueIncrement() {
  counterValue += 1;
  spanValueUI.textContent = counterValue;
}
