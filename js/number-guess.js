const newGame = document.querySelector(".new-game");

newGame.addEventListener("click", () => {
  const number = prompt('Computer: Guess a number!');
  const computerNumber = Math.floor((Math.random() * 100) + 1);
  
  if (number < computerNumber) {
    alert(`
    Too low! 
    Computer picked ${computerNumber} 
    You picked ${number}`)
  } else if (number > computerNumber) {
    alert(`
    Too high! 
    Computer picked ${computerNumber}
    You picked ${number}`)
  } else if (number === computerNumber) {
    alert(`
    Correct!
    Computer picked${computerNumber}
    You picked ${number}`)
  } else if (number = "") {
    alert('Please pick a number.');
  }
});