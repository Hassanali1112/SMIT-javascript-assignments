var cssQuiz = [
  {
    question: "What does CSS stand for?",
    option1: "Cascading Style Sheets",
    option2: "Creative Style Sheets",
    option3: "Computer Style Sheets",
    option4: "Colorful Style Sheets",
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    option1: "css",
    option2: "style",
    option3: "script",
    option4: "link",
    answer: "style",
  },
  {
    question:
      "Which property is used to change the background color of an element?",
    option1: "background-color",
    option2: "color",
    option3: "bgcolor",
    option4: "background",
    answer: "background-color",
  },
  {
    question: "How do you add an external CSS file to an HTML document?",
    option1: "stylesheet",
    option2: "style src='style.css",
    option3: "link rel='stylesheet' href='style.css'",
    option4: "css href='style.css'",
    answer: "link rel='stylesheet' href='style.css'",
  },
  {
    question: "Which property is used to change the font size of text?",
    option1: "font-style",
    option2: "text-size",
    option3: "font-size",
    option4: "size",
    answer: "font-size",
  },
  {
    question: "How do you make text bold in CSS?",
    option1: "font-weight: bold;",
    option2: "font-style: bold;",
    option3: "text-weight: bold;",
    option4: "text-style: bold;",
    answer: "font-weight: bold;",
  },
  {
    question: "Which property is used to change the text color of an element?",
    option1: "font-color",
    option2: "text-color",
    option3: "color",
    option4: "foreground-color",
    answer: "color",
  },
  {
    question:
      "Which CSS property controls the layout of items in a flex container?",
    option1: "display",
    option2: "justify-content",
    option3: "align-items",
    option4: "flex-direction",
    answer: "display",
  },
  {
    question: "What is the default position value of an HTML element?",
    option1: "absolute",
    option2: "relative",
    option3: "fixed",
    option4: "static",
    answer: "static",
  },
  {
    question: "How do you center a block element horizontally using CSS?",
    option1: "text-align: center;",
    option2: "margin: 0 auto;",
    option3: "align-items: center;",
    option4: "display: center;",
    answer: "margin: 0 auto;",
  },
  {
    question:
      "Which property is used to set the space between the border and the content of an element?",
    option1: "margin",
    option2: "padding",
    option3: "border-spacing",
    option4: "spacing",
    answer: "padding",
  },
  {
    question: "What does the z-index property in CSS control?",
    option1: "The stacking order of elements",
    option2: "The transparency of an element",
    option3: "The size of an element",
    option4: "The positioning of an element",
    answer: "The stacking order of elements",
  },
  {
    question:
      "Which property is used to create rounded corners for an element?",
    option1: "border-radius",
    option2: "corner-radius",
    option3: "border-round",
    option4: "corner-round",
    answer: "border-radius",
  },
  {
    question: "How do you apply a shadow to an element in CSS?",
    option1: "box-shadow",
    option2: "shadow-box",
    option3: "text-shadow",
    option4: "element-shadow",
    answer: "box-shadow",
  },
  {
    question:
      "Which property is used to set the spacing between lines of text?",
    option1: "line-height",
    option2: "letter-spacing",
    option3: "text-indent",
    option4: "text-spacing",
    answer: "line-height",
  },
];

let quizContainer = document.querySelector(".quiz-container");

let question = document.querySelector(".question");

let option1 = document.querySelector("#option1");

let option2 = document.querySelector("#option2");

let option3 = document.querySelector("#option3");

let option4 = document.querySelector("#option4");

let label1 = document.querySelector("#label1");

let label2 = document.querySelector("#label2");

let label3 = document.querySelector("#label3");

let label4 = document.querySelector("#label4");

let option = document.getElementsByName("option");

let nextBtn = document.querySelector(".nextBtn");

let questionNumber = 0;

let score = 0;

let resultContainer = document.querySelector(".result-container");

let resultMessage = document.querySelector(".resulMessage");

let percentageShow = document.querySelector(".percentage");

let totalQue = document.querySelector(".totalQues");

let correcQues = document.querySelector(".correctQues");

function loadQuestion() {
  question.innerHTML = cssQuiz[questionNumber].question;
  label1.innerHTML = cssQuiz[questionNumber].option1;
  label2.innerHTML = cssQuiz[questionNumber].option2;
  label3.innerHTML = cssQuiz[questionNumber].option3;
  label4.innerHTML = cssQuiz[questionNumber].option4;

  option1.value = cssQuiz[questionNumber].option1;
  option2.value = cssQuiz[questionNumber].option2;
  option3.value = cssQuiz[questionNumber].option3;
  option4.value = cssQuiz[questionNumber].option4;
}
nextBtn.addEventListener("click", function () {
  let inputChecked = false;
  for (let i = 0; i < option.length; i++) {
    if (option[i].checked) {
      inputChecked = true;

      if (option[i].value === cssQuiz[questionNumber].answer) {
        score++;
      }
    }
  }
  if (!inputChecked) {
    Swal.fire({
      title: "No Option Selected",
      text: "Please Select Any Option",
      icon: "error",
    });
  } else {
    if (questionNumber < cssQuiz.length - 1) {
      questionNumber++;
      deSelectInput();
      loadQuestion();
    } else {
      let cssQuizResult = {
        quizName: "CSS Quiz",
        isAttempt: false,
        result: {},
      };
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      let percentage = Math.round((score / cssQuiz.length) * 100);
      if (percentage > 70) {
        resultMessage.innerHTML = "Congradualations";
        resultMessage.style.color = "green";
        percentageShow.innerHTML = `${percentage}%`;
        totalQue.innerHTML = cssQuiz.length;
        correcQues.innerHTML = score;
      } else {
        resultMessage.innerHTML = "OOps you're fail better next time";
        resultMessage.style.color = "red";
        percentageShow.innerHTML = `${percentage}%`;
        totalQue.innerHTML = cssQuiz.length;
        correcQues.innerHTML = score;
      }
      cssQuizResult.isAttempt = true;
      cssQuizResult.result.totalQue = cssQuiz.length;
      cssQuizResult.result.score = score;
      cssQuizResult.result.scoreInPercent = percentage;
      let cssResultData = JSON.stringify(cssQuizResult);
      localStorage.setItem("cssResultData", cssResultData);
    }
  }
});

function deSelectInput() {
  for (let i = 0; i < option.length; i++) {
    option[i].checked = false;
  }
}

let checkQuizAttempt = () => {
  checkIsLoggedIn();
  let cssResultData = localStorage.getItem("cssResultData");
  cssResultData = JSON.parse(cssResultData);
  if (cssResultData) {
    let percentage = `${cssResultData.result.scoreInPercent}%`;
    if (percentage > 70) {
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      resultMessage.innerHTML = "Congradualations";
      resultMessage.style.color = "green";
      percentageShow.innerHTML = `${percentage}%`;
      totalQue.innerHTML = cssResultData.result.totalQue;
      correcQues.innerHTML = cssResultData.result.score;
    } else {
      Swal.fire({
        title: "Attempted !",
        text: "you attempted befor but failed ! best of luck for this attempt",
        icon: "info",
      });
      loadQuestion();
    }
  } else {
    loadQuestion();
  }
};

let logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", false);
  checkIsLoggedIn();
});

window.onload = checkQuizAttempt();

function checkIsLoggedIn() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    window.location.href = "../../index.html";
  }
}
