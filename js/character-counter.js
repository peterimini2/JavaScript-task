const inputField = document.querySelector(".input-field");
const display = document.querySelector(".display");
const character = document.querySelector(".character");

inputField.addEventListener("input", () => {
  const charactersRemaining = 20 - inputField.value.length;
  display.textContent = `${inputField.value.length} / 20`
  character.textContent = `${charactersRemaining} Characters remaining`

  if (inputField.value.length > 20) {
    inputField.value = inputField.value.slice(0, 20);
    character.textContent = "Maximum of 20 characters";
    display.textContent = "20/20"
  }
});