import {
  characterPool, uppercase, lowercase, numbers,
  symbols, uppercaseCheckbox, lowercaseCheckbox, 
  numbersCheckbox, symbolsCheckbox, newPassword,
  characterLength, generatePasswordBtn
} from "./password-characters.js";
 

let characterList = "";

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