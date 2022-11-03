const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);
const inputLength = Number(input.getAttribute("data-length"));

function onInputBlur() {
  console.log(input.value.length);
  if (inputLength === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  console.log(inputLength);
}

// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };
