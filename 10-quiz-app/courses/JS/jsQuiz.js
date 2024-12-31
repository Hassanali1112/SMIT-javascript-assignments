var jsQuiz = [
  {
    question: "Which of the following is a JavaScript data type?",
    option1: "String",
    option2: "Number",
    option3: "Boolean",
    option4: "All of the above",
    answer: "All of the above",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    option1: "var",
    option2: "let",
    option3: "const",
    option4: "All of the above",
    answer: "All of the above",
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    option1: "alert('Hello World');",
    option2: "msg('Hello World');",
    option3: "console.log('Hello World');",
    option4: "print('Hello World');",
    answer: "alert('Hello World');",
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    option1: "=",
    option2: "==",
    option3: "===",
    option4: "!==",
    answer: "===",
  },
  // {
  //   question: "What is the output of: `typeof null`?",
  //   option1: "'null'",
  //   option2: "'undefined'",
  //   option3: "'object'",
  //   option4: "'number'",
  //   answer: "'object'",
  // },
  // {
  //   question:
  //     "Which method is used to parse a JSON string into a JavaScript object?",
  //   option1: "JSON.stringify()",
  //   option2: "JSON.parse()",
  //   option3: "JSON.objectify()",
  //   option4: "JSON.toObject()",
  //   answer: "JSON.parse()",
  // },
  // {
  //   question: "What is the correct syntax for a JavaScript arrow function?",
  //   option1: "() => { return 'Hello'; }",
  //   option2: "function() => { return 'Hello'; }",
  //   option3: "() -> { return 'Hello'; }",
  //   option4: "function => { return 'Hello'; }",
  //   answer: "() => { return 'Hello'; }",
  // },
  // {
  //   question: "Which method adds a new element to the end of an array?",
  //   option1: "push()",
  //   option2: "pop()",
  //   option3: "shift()",
  //   option4: "unshift()",
  //   answer: "push()",
  // },
  // {
  //   question: "Which keyword is used to define a constant in JavaScript?",
  //   option1: "var",
  //   option2: "let",
  //   option3: "const",
  //   option4: "constant",
  //   answer: "const",
  // },
  // {
  //   question: "What is the correct way to create an object in JavaScript?",
  //   option1: "let obj = {key: 'value'};",
  //   option2: "let obj = (key: 'value');",
  //   option3: "let obj = [key: 'value'];",
  //   option4: "let obj = 'key: value';",
  //   answer: "let obj = {key: 'value'};",
  // },
  // {
  //   question: "What is the purpose of the `isNaN()` function?",
  //   option1: "To check if a value is null",
  //   option2: "To check if a value is not a number",
  //   option3: "To convert a string to a number",
  //   option4: "To check if a value is undefined",
  //   answer: "To check if a value is not a number",
  // },
  // {
  //   question: "Which JavaScript loop is guaranteed to run at least once?",
  //   option1: "for loop",
  //   option2: "while loop",
  //   option3: "do-while loop",
  //   option4: "for-of loop",
  //   answer: "do-while loop",
  // },
  // {
  //   question: "How can you add a comment in JavaScript?",
  //   option1: "// This is a comment",
  //   option2: "<!-- This is a comment -->",
  //   option3: "' This is a comment",
  //   option4: "# This is a comment",
  //   answer: "// This is a comment",
  // },
  // {
  //   question: "What does the `map()` method do in JavaScript?",
  //   option1: "Iterates over an array and filters elements",
  //   option2: "Applies a function to each element and creates a new array",
  //   option3: "Finds the first matching element in an array",
  //   option4: "Reduces an array to a single value",
  //   answer: "Applies a function to each element and creates a new array",
  // },
  // {
  //   question: "What is the purpose of the `this` keyword in JavaScript?",
  //   option1: "To refer to the current object",
  //   option2: "To define a variable",
  //   option3: "To declare a function",
  //   option4: "To create a class",
  //   answer: "To refer to the current object",
  // },
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
  question.innerHTML = jsQuiz[questionNumber].question;
  label1.innerHTML = jsQuiz[questionNumber].option1;
  label2.innerHTML = jsQuiz[questionNumber].option2;
  label3.innerHTML = jsQuiz[questionNumber].option3;
  label4.innerHTML = jsQuiz[questionNumber].option4;

  option1.value = jsQuiz[questionNumber].option1;
  option2.value = jsQuiz[questionNumber].option2;
  option3.value = jsQuiz[questionNumber].option3;
  option4.value = jsQuiz[questionNumber].option4;
}
nextBtn.addEventListener("click", function () {
  let inputChecked = false;
  for (let i = 0; i < option.length; i++) {
    if (option[i].checked) {
      inputChecked = true;

      if (option[i].value === jsQuiz[questionNumber].answer) {
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
    if (questionNumber < jsQuiz.length - 1) {
      questionNumber++;
      deSelectInput();
      loadQuestion();
    } else {
      let jsQuizResult = {
        quizName: "JS Quiz",
        isAttempt: false,
        result: {},
      };
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      let percentage = Math.round((score / jsQuiz.length) * 100);
      if (percentage > 70) {
        resultMessage.innerHTML = "Congradualations";
        resultMessage.style.color = "green";
        percentageShow.innerHTML = `${percentage}%`;
        totalQue.innerHTML = jsQuiz.length;
        correcQues.innerHTML = score;
      } else {
        resultMessage.innerHTML = "OOps you're fail better next time";
        resultMessage.style.color = "red";
        percentageShow.innerHTML = `${percentage}%`;
        totalQue.innerHTML = jsQuiz.length;
        correcQues.innerHTML = score;
      }
      jsQuizResult.result.totalQue = jsQuiz.length;
      jsQuizResult.result.score = score;
      jsQuizResult.result.scoreInPercent = percentage;

      // let jsResultData = JSON.stringify(jsQuizResult);
      // localStorage.setItem("resultData", jsResultData);
      localStorage.setItem("jsResultData", JSON.stringify(jsQuizResult));
    }
  }
});

function deSelectInput() {
  for (let i = 0; i < option.length; i++) {
    option[i].checked = false;
  }
}
let checkQuizAttempt = () => {
  checkIsLoggedIn()
  let jsResultData = JSON.parse(localStorage.getItem("jsResultData"));
  if (jsResultData) {
    if (jsResultData.result.scoreInPercent > 70) {
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      resultMessage.innerHTML = "Congradualations";
      resultMessage.style.color = "green";
      percentageShow.innerHTML = `${jsResultData.result.scoreInPercent}%`;
      totalQue.innerHTML = jsResultData.result.totalQue;
      correcQues.innerHTML = jsResultData.result.score;
    } else {
      Swal.fire({
        title: "Attempted !",
        text: "you attempted befor but failed ! best of luck for this attempt",
        icon: "info",
      });
      setTimeout(() => {
        loadQuestion();
      }, 2000);
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

