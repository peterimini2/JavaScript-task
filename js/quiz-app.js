const startBtn = document.querySelector(".start-btn");
const quizQuestion = document.querySelector(".quiz-question");

const questionsArray = [
  {
    question: "What does CSS stand for?",

    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets"
    ],

    correctAnswer: "Cascading Style Sheets"
  },

  {
    question: "What language is used to make the website interactive?",

    answers: [
      "CSS",
      "HTML",
      "JavaScript",
      "None"
    ],

    correctAnswer: "JavaScript"
  },

  {
    question: "What is used to create the structure of a webpage?",

    answers: [
      "CSS",
      "HTML",
      "JavaScript",
      "None"
    ],

    correctAnswer: "HTML"
  }
];


startBtn.addEventListener("click", () => {
  startBtn.outerHTML = "";

  let questionNumber = 0;
  let score = 0;

  const answerContainer = document.createElement("div");
  document.body.appendChild(answerContainer);

  const nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";
  document.body.appendChild(nextBtn);


  function showQuestion() {
    quizQuestion.textContent = questionsArray[questionNumber].question;

    answerContainer.innerHTML = "";

    for (let i = 0; i < questionsArray[questionNumber].answers.length; i++) {

      const radio = document.createElement("input");

      radio.type = "radio";
      radio.name = "answer";
      radio.value = questionsArray[questionNumber].answers[i];

      const label = document.createElement("label");

      label.textContent = questionsArray[questionNumber].answers[i];

      answerContainer.appendChild(radio);
      answerContainer.appendChild(label);
      answerContainer.appendChild(document.createElement("br"));
    }
  }


  showQuestion();


  nextBtn.addEventListener("click", () => {

    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );


    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }


    if (selectedAnswer.value ===
      questionsArray[questionNumber].correctAnswer) {
      score++;
    }


    questionNumber++;


    if (questionNumber < questionsArray.length) {
      showQuestion();

    } else {

      quizQuestion.textContent = "Quiz Complete!";

      answerContainer.innerHTML =
        `Your score: ${score}/${questionsArray.length}`;

      nextBtn.remove();
    }
  }); 
});