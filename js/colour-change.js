const changeColor = document.querySelector(".colour-btn");
const body = document.body;

const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "white",
  "pink"
];

changeColor.addEventListener("click", () => {
  const randomColors = Math.floor(Math.random() * colors.length);
    
  body.style.backgroundColor = colors[randomColors];
})