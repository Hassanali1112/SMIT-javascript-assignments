var htmlQuiz = [
  {
    question: "What is the main purpose of the DOCTYPE declaration in HTML?",
    option1: "To link the CSS file",
    option2: "To define the version of HTML",
    option3: "To include JavaScript",
    option4: "To make the page responsive",
    answer: "To define the version of HTML",
  },
  {
    question: "What is the use of the 'alt' attribute in the <img> tag?",
    option1: "To specify the image resolution",
    option2: "To provide alternative text for the image",
    option3: "To style the image",
    option4: "To define the image path",
    answer: "To provide alternative text for the image",
  },
  {
    question: "What does the 'action' attribute in a form tag specify?",
    option1: "The HTTP method to be used",
    option2: "The URL to submit the form data",
    option3: "The type of form input",
    option4: "The validation rules for the form",
    answer: "The URL to submit the form data",
  },
  // {
  //   question:
  //     "What is the purpose of the 'placeholder' attribute in an input tag?",
  //   option1: "To define the type of input",
  //   option2: "To provide a short hint in the input field",
  //   option3: "To validate the input data",
  //   option4: "To style the input field",
  //   answer: "To provide a short hint in the input field",
  // },
  // {
  //   question: "Which attribute is used to specify the character encoding of an HTML document?",
  //   option1: "charset",
  //   option2: "encoding",
  //   option3: "type",
  //   option4: "lang",
  //   answer: "charset",
  // },
  // {
  //   question: "What does the 'target' attribute in an <a> tag specify?",
  //   option1: "The size of the link",
  //   option2: "The style of the link",
  //   option3: "Where to open the linked document",
  //   option4: "The type of linked document",
  //   answer: "Where to open the linked document",
  // },
  // {
  //   question: "What is the default method used by forms to send data?",
  //   option1: "GET",
  //   option2: "POST",
  //   option3: "PUT",
  //   option4: "DELETE",
  //   answer: "GET",
  // },
  // {
  //   question: "Which input type is used to select multiple options in a form?",
  //   option1: "text",
  //   option2: "checkbox",
  //   option3: "radio",
  //   option4: "password",
  //   answer: "checkbox",
  // },
  // {
  //   question: "Which input type is used to upload a file in a form?",
  //   option1: "text",
  //   option2: "file",
  //   option3: "upload",
  //   option4: "submit",
  //   answer: "file",
  // },
  // {
  //   question: "What is the purpose of the 'required' attribute in an input tag?",
  //   option1: "To specify the input type",
  //   option2: "To validate the input value",
  //   option3: "To make the input field mandatory",
  //   option4: "To style the input field",
  //   answer: "To make the input field mandatory",
  // },
  // {
  //   question: "What does HTML stand for?",
  //   option1: "Hypertext Machine Language",
  //   option2: "Hypertext and Links Markup Language",
  //   option3: "Hypertext Markup Language",
  //   option4: "Hyper Tool Markup Language",
  //   answer: "Hypertext Markup Language",
  // },

  // {
  //   question: "What is the purpose of the noscript tag in HTML?",
  //   option1: "To run JavaScript code",
  //   option2: "To provide alternative content if JavaScript is disabled",
  //   option3: "To include a stylesheet",
  //   option4: "To define non-breaking spaces",
  //   answer: "To provide alternative content if JavaScript is disabled",
  // },
  // {
  //   question: "What is the purpose of the 'autoplay' attribute in a video tag?",
  //   option1: "To loop the video automatically",
  //   option2: "To play the video automatically when the page loads",
  //   option3: "To define video controls",
  //   option4: "To mute the video",
  //   answer: "To play the video automatically when the page loads",
  // },
  // {
  //   question: "What does the 'lang' attribute in an HTML tag specify?",
  //   option1: "The programming language of the page",
  //   option2: "The text alignment of the content",
  //   option3: "The language of the document",
  //   option4: "The character encoding of the document",
  //   answer: "The language of the document",
  // },
  // {
  //   question: "What does the 'contenteditable' attribute do in HTML?",
  //   option1: "Allows content to be editable by the user",
  //   option2: "Makes the content read-only",
  //   option3: "Defines the style of the content",
  //   option4: "Links the content to external resources",
  //   answer: "Allows content to be editable by the user",
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
  question.innerHTML = htmlQuiz[questionNumber].question;
  label1.innerHTML = htmlQuiz[questionNumber].option1;
  label2.innerHTML = htmlQuiz[questionNumber].option2;
  label3.innerHTML = htmlQuiz[questionNumber].option3;
  label4.innerHTML = htmlQuiz[questionNumber].option4;

  option1.value = htmlQuiz[questionNumber].option1;
  option2.value = htmlQuiz[questionNumber].option2;
  option3.value = htmlQuiz[questionNumber].option3;
  option4.value = htmlQuiz[questionNumber].option4;
}
nextBtn.addEventListener("click", function () {
  let inputChecked = false;
  for (let i = 0; i < option.length; i++) {
    if (option[i].checked) {
      inputChecked = true;

      if (option[i].value === htmlQuiz[questionNumber].answer) {
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
    if (questionNumber < htmlQuiz.length - 1) {
      questionNumber++;
      deSelectInput();
      loadQuestion();
    } else {
      let htmlQuizResult = {
        quizName: "HTML Quiz",
        isAttempt: false,
        result: {},
      };
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      let percentage = Math.round((score / htmlQuiz.length) * 100);
      if (percentage > 70) {
        resultMessage.innerHTML = "Congradualations";
        resultMessage.style.color = "green";
        percentageShow.innerHTML = `${percentage}%`;
        totalQue.innerHTML = htmlQuiz.length;
        correcQues.innerHTML = score;
      } else {
        resultMessage.innerHTML = "OOps you're fail better next time";
        resultMessage.style.color = "red";
        percentageShow.innerHTML = `${percentage}%`;
        totalQue.innerHTML = htmlQuiz.length;
        correcQues.innerHTML = score;
      }
      htmlQuizResult.isAttempt = true;
      htmlQuizResult.result.totalQue = htmlQuiz.length;
      htmlQuizResult.result.score = score;
      htmlQuizResult.result.scoreInPercent = percentage;

      let htmlResultData = JSON.stringify(htmlQuizResult);
      localStorage.setItem("htmlResultData", htmlResultData);
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
  let htmlResultData = localStorage.getItem("htmlResultData");
  htmlResultData = JSON.parse(htmlResultData);
  console.log(htmlResultData);
  if (htmlResultData) {
    if (htmlResultData.result.scoreInPercent > 70) {
      quizContainer.style.display = "none";
      resultContainer.style.display = "flex";
      resultMessage.innerHTML = "Congradualations";
      resultMessage.style.color = "green";
      percentageShow.innerHTML = `${htmlResultData.result.scoreInPercent} %`;
      totalQue.innerHTML = htmlResultData.result.totalQue;
      correcQues.innerHTML = htmlResultData.result.score;
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
