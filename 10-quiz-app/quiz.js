// var htmlQuiz = [
//     {
//       question: "HTML Stands for ?",
//       option1: "Hypertext",
//       option2: "Markup",
//       option3: "HyperSuperText",
//       option4: "HyperText Markup Language",
//       answer: "HyperText Markup Language",
//     },
//     {
//       question: "Which Element used to bold text in HTML?",
//       option1: "img",
//       option2: "h1",
//       option3: "strong",
//       option4: "p",
//       answer: "strong",
//     },
//     {
//       question: "Which Element used for Image in HTML?",
//       option1: "span",
//       option2: "div",
//       option3: "image",
//       option4: "img",
//       answer: "img",
//     },
//     {
//       question: "Which tag is used to create a hyperlink in HTML?",
//       option1: "link",
//       option2: "a",
//       option3: "hyperlink",
//       option4: "url",
//       answer: "a",
//     },
//   //   {
//   //     question:
//   //       "Which attribute is used to define the background color of a webpage in HTML?",
//   //     option1: "bgcolor",
//   //     option2: "color",
//   //     option3: "background",
//   //     option4: "style",
//   //     answer: "bgcolor",
//   //   },
//   //   {
//   //     question: "What is the correct HTML element for inserting a line break?",
//   //     option1: "break",
//   //     option2: "br",
//   //     option3: "hr",
//   //     option4: "line",
//   //     answer: "br",
//   //   },
//   //   {
//   //     question: "Which tag is used for creating an ordered list in HTML?",
//   //     option1: "ul",
//   //     option2: "li",
//   //     option3: "ol",
//   //     option4: "dl",
//   //     answer: "ol",
//   //   },
//   //   {
//   //     question: "Which tag is used to define a table in HTML?",
//   //     option1: "table",
//   //     option2: "tr",
//   //     option3: "td",
//   //     option4: "thead",
//   //     answer: "table",
//   //   },
//   //   {
//   //     question: "Which HTML tag is used to display a form in a webpage?",
//   //     option1: "input",
//   //     option2: "form",
//   //     option3: "button",
//   //     option4: "textarea",
//   //     answer: "form",
//   //   },
//   //   {
//   //     question:
//   //       "What is the default value of the type attribute for an <input> tag in HTML?",
//   //     option1: "text",
//   //     option2: "password",
//   //     option3: "checkbox",
//   //     option4: "radio",
//   //     answer: "text",
//   //   },
//   ];
  let userName;

  // logo 
  let logo = document.querySelector(".logo");
  logo.addEventListener("click",()=>{
    location.assign("./welcome.html")
  })
  // code for welcome file
// sign up
  let name;
  let email;
  let password;

  let signUpName = document.querySelector("#name")
  let signUpEmail = document.querySelector("#email")
  let signUpPassword = document.querySelector("#password")
  let signUp = document.querySelector("#sumitSignUp");
  signUp.addEventListener("click",()=>{
    if(signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === ""){
      Swal.fire({
        title: "Input field required",
        text: "Kindly fill all input fields",
        icon: "error"
      });
    } else {
      name = signUpName.value;
      email = signUpEmail.value;
      password = signUpPassword.value;
      console.table(name,email,password)
      signUpName.value = "";
      signUpEmail.value = "";
      signUpPassword.value = "";
      Swal.fire({
        title: "Account has been created",
        text: "For taking test kindly login",
        icon: "success"
      });
      
    }
  });

  // sign in
  let signInEmail = document.querySelector("#signInEmail");
  let signInPassword = document.querySelector("#signInPassword");
   
  let signIn = document.querySelector("#sumitSignIn");
  signIn.addEventListener("click",()=>{
    if( signInEmail.value === "" || signInPassword.value === ""){
      Swal.fire({
        title: "Input field required",
        text: "Kindly fill all input fields",
        icon: "error"
      });
    } else if( signInEmail.value === !email || signInPassword === !password ){
      Swal.fire({
        title: "Email Or Password is invalid",
        text: "Kindly fill all input fields properly",
        icon: "error"
      });
    } else if(!email || !password){
      Swal.fire({
        title: "user not found",
        text: "Kindly create an account first",
        icon: "error"
      });
      signInEmail.value = ""
      signInPassword.value = ""
    }
    else {
      userName = document.querySelector("#user-name")
      console.log(userName)
      // userName.innerHTML = name;
      location.assign("./quiz.html")
      
      
    }
  })

  // code for quiz file 

  // let question = document.querySelector(".question")
 
  // let questionCount = 0;

  // function renderQuestion(){
  //   question.innerHTML = htmlQuiz[questionCount].question
  // }

  // window.onload = renderQuestion()