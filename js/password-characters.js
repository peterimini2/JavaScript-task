export const characterPool = {
 uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
 lowercase: "abcdefghijklmnopqrstuvwxyz",
 numbers: "0123456789",
 symbols: "!@#$%^&*()_+-={}|"
}

//variables

export const uppercase = characterPool.uppercase;
export const lowercase = characterPool.lowercase;
export const numbers = characterPool.numbers;
export const symbols = characterPool.symbols;

export const uppercaseCheckbox = document.getElementById("character1");
export const lowercaseCheckbox = document.getElementById("character2");
export const numbersCheckbox = document.getElementById("character3");
export const symbolsCheckbox = document.getElementById("character4");

export const newPassword = document.querySelector(".new-password");

export const characterLength = document.querySelector(".character-length");

export const generatePasswordBtn = document.querySelector(".generate-password");
