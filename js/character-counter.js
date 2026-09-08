const inputField = document.querySelector(".input-field");
const display = document.querySelector(".display");
const character = document.querySelector(".character");

inputField.addEventListener("input", () => {

  if (inputField.value.length > 20) {
    inputField.value = inputField.value.slice(0, 20);
  }

  const charactersRemaining = 20 - inputField.value.length;

  display.textContent = `${inputField.value.length} / 20`;
  character.textContent = `${charactersRemaining} Characters remaining`;

});