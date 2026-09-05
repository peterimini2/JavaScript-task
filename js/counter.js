const counter = document.querySelector(".counter")
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const resetBtn = document.querySelector(".reset-btn");

let x = 0;

plusBtn.addEventListener("click", () => {
  counter.innerText = ++x;
});

minusBtn.addEventListener("click", () => {
  counter.innerText= --x;
});

resetBtn.addEventListener("click", () => {
  counter.innerText = x = 0;
});