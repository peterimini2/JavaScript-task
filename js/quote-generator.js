const quoteBtn = document.querySelector(".quote-btn");
const displayQuote = document.querySelector(".quote");
const displayAuthor = document.querySelector(".author");


const quoteList = {
  quoteArray: [
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "The secret of getting ahead is getting started",
    "He who has a why to live can bear almost any how.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The unexamined life is not worth living."
  ],
  authorArray: [
    "Will Durant",
    "Mark Twain",
    "Friedrich Nietzsche",
    "Confucius",
    "Socrates"
  ]
}

quoteBtn.addEventListener("click", () => {
  const randomQuote = Math.floor(Math.random() * quoteList.quoteArray.length);
  displayQuote.innerText = quoteList.quoteArray[randomQuote];
  displayAuthor.innerText = quoteList.authorArray[randomQuote];
});
