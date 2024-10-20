const parentElem = document.querySelector(".bottom-section");
const correctAns = document.querySelector(".correct-ans");
const wrongAns = document.querySelector(".wrong-ans");
const finalScore = document.querySelector(".score");
const quizSection = document.querySelector(".bottom-section");
let score = 0;
let wrong = 0;
let NumberOfClicks = 0;
parentElem.addEventListener("click", function (e){
  e.preventDefault();
  NumberOfClicks++;
  if(e.target.classList.contains("correct")){
     e.target.parentElement.parentElement.style.display = "none";
    console.log(e.target.parentElement.parentElement)
    score++;
    correctAns.textContent = score;

  } else {
    wrong++;
     e.target.parentElement.parentElement.style.display = "none";
       console.log(e.target.parentElement.parentElement);
    wrongAns.textContent = wrong;
  }
  if (NumberOfClicks === parentElem.children.length) {
   
    endQuiz();
  }
})
function endQuiz (){
  let scoreInPercentage = (score / parentElem.children.length)* 100;
  finalScore.classList.add("customClass");
  finalScore.textContent = `${scoreInPercentage}%`
  quizSection.style.display = "none";
}