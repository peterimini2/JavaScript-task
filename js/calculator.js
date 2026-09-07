const inputOne = document.querySelector(".number-1");
const inputTwo = document.querySelector(".number-2");
const result = document.querySelector(".result");

const addBtn = document.querySelector(".add-btn");
const subtractBtn = document.querySelector(".subtract-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const divideBtn = document.querySelector(".divide-btn");



addBtn.addEventListener("click", () => {
  if (inputOne.value === "" || inputTwo.value === "") {
    result.textContent = "Please enter both numbers."
  } else {
    const [value1, value2] = inputValues();
    result.textContent = value1 + value2
  }
})
subtractBtn.addEventListener("click", () => {
  if (inputOne.value === "" || inputTwo.value === "") {
    result.textContent = "Please enter both numbers."
  } else {
    const [value1, value2] = inputValues();
    result.textContent = value1 - value2
  }
})

multiplyBtn.addEventListener("click", () => {
  if (inputOne.value === "" || inputTwo.value === "") {
    result.textContent = "Please enter both numbers."
  } else {
    const [value1, value2] = inputValues();
    result.textContent = value1 * value2
  }
})
divideBtn.addEventListener("click", () => {
  if (inputOne.value === "" || inputTwo.value === "") {
    result.textContent = "Please enter both numbers."
  } else {
    const [value1, value2] = inputValues();

    if (value2 === 0) {
      result.textContent = 'Cannot divide by zero.'
    } else {
      result.textContent = value1 / value2;
    }
  }
})


function inputValues() {
  return [Number(inputOne.value), Number(inputTwo.value)];
}