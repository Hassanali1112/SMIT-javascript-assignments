var htmlQuiz = [
    {
      question: "HTML Stands for ?",
      option1: "Hypertext",
      option2: "Markup",
      option3: "HyperSuperText",
      option4: "HyperText Markup Language",
      answer: "HyperText Markup Language",
    },
    {
      question: "Which Element used to bold text in HTML?",
      option1: "img",
      option2: "h1",
      option3: "strong",
      option4: "p",
      answer: "strong",
    },
    {
      question: "Which Element used for Image in HTML?",
      option1: "span",
      option2: "div",
      option3: "image",
      option4: "img",
      answer: "img",
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
  console.log(option);
  
  let nextBtn = document.querySelector(".nextBtn");
  
  let questionNumber = 0;
  
  let score = 0;
  
  let resultContainer = document.querySelector(".result-container");
  
  let resultMessage = document.querySelector(".resulMessage")
  
  let percentageShow = document.querySelector(".percentage");
  
  let totalQue = document.querySelector(".totalQues")
  
  let correcQues = document.querySelector(".correctQues")
  
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
          console.log(score);
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
      } else{
          quizContainer.style.display = "none"
        resultContainer.style.display = "flex";
        let percentage = (score / htmlQuiz.length) * 100;
        if(percentage > 70){
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
      }
  
    }
  });
  
  function deSelectInput() {
    for (let i = 0; i < option.length; i++) {
      option[i].checked = false;
    }
  }
  
  window.onload = loadQuestion();
  