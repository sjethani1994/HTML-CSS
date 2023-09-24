const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
resultContainer.style.display = "none";
submitButton.style.display = "none";

const questions = [
  {
    question: "5 + 6",
    answer: 11,
    options: ["10", "11", "12", "13"],
  },
  {
    question: "8 + 9",
    answer: 17,
    options: ["15", "16", "17", "18"],
  },
  {
    question: "9 * 15",
    answer: 135,
    options: ["120", "125", "130", "135"],
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsList.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "myRadioGroup");
    radio.setAttribute("value", option);
    radio.setAttribute("id", `myRadio${currentQuestionIndex}`);
    li.appendChild(radio);
    optionsList.appendChild(li);
  });
}

function checkAnswer() {
  const selectedRadio = document.querySelector(
    'input[name="myRadioGroup"]:checked'
  );
  if (selectedRadio) {
    const selectedValue = selectedRadio.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedValue == currentQuestion.answer) {
      console.log("Answer is correct");
      score += 1;
    } else {
      console.log("Answer is not correct");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      if (currentQuestionIndex == questions.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "block";
      }
    } else {
      // All questions are answered, hide quiz container, show result container
      quizContainer.style.display = "none";
      resultContainer.style.display = "block";

      // Display the user's score and the total number of questions
      const totalQuestions = questions.length;
      const h5 = document.getElementById("score");
      h5.innerHTML = `You scored ${score} out of ${totalQuestions}`;
    }

    selectedRadio.checked = false; // Uncheck the selected radio button
  } else {
    alert("Please select an answer.");
  }
}

// Initialize the quiz by loading the first question
loadQuestion();

// Add a click event listener to the "Next" button
nextButton.addEventListener("click", () => {
  checkAnswer();
});

// Add a click event listener to the "Submit" button (if you still want to use it)
submitButton.addEventListener("click", () => {
  checkAnswer();
});

