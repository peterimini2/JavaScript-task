import { characterPool } from "./password-characters.js";
let characterList = "";

const uppercase = characterPool.uppercase;
const lowercase = characterPool.lowercase;
const numbers = characterPool.numbers;
const symbols = characterPool.symbols;

const uppercaseCheckbox = document.getElementById("character1");
const lowercaseCheckbox = document.getElementById("character2");
const numbersCheckbox = document.getElementById("character3");
const symbolsCheckbox = document.getElementById("character4");

const newPassword = document.querySelector(".new-password");

const characterLength = document.querySelector(".character-length");

const generatePasswordBtn = document.querySelector(".generate-password");

uppercaseCheckbox.addEventListener("change", () => {
  if (uppercaseCheckbox.checked) {
    characterList += uppercase;
  } else {
    characterList = characterList.replace(uppercase, "")
  }
});

lowercaseCheckbox.addEventListener("change", () => {
  if (lowercaseCheckbox.checked) {
    characterList += lowercase;
  } else {
    characterList = characterList.replace(lowercase, "")
  }
});

numbersCheckbox.addEventListener("change", () => {
  if (numbersCheckbox.checked) {
    characterList += numbers;
  } else {
    characterList = characterList.replace(numbers, "")
  }
});

symbolsCheckbox.addEventListener("change", () => {
  if (symbolsCheckbox.checked) {
    characterList += symbols;
  } else {
    characterList = characterList.replace(symbols, "")
  }
});

generatePasswordBtn.addEventListener("click", () => {
  let password = "";

  for (let i = 0; i < Number(characterLength.value); i++) {
    const randomIndex = Math.floor(Math.random() * characterList.length);
    const randomCharacter = characterList[randomIndex];

    password += randomCharacter;
  }
  newPassword.textContent = password;
})