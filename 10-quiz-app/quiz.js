
let newUser;

let signUpName = document.querySelector("#name");
let signUpEmail = document.querySelector("#email");
let signUpPassword = document.querySelector("#password");
let signUp = document.querySelector("#sumitSignUp");
let signUpClose = document.querySelector(".signupClose");
let signInModal = document.querySelector(".sign-in");

// variables for regex

let nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// sign up
signUp.addEventListener("click", () => {
  if (nameRegex.test(signUpName.value)) {
    if (emailRegex.test(signUpEmail.value)) {
      if (passwordRegex.test(signUpPassword.value)) {
        let isUserRegistered = JSON.parse(localStorage.getItem("userDetails"));
        if (!isUserRegistered) {
          newUser = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
          };
          localStorage.setItem("userDetails", JSON.stringify(newUser));
          signUpName.value = "";
          signUpEmail.value = "";
          signUpPassword.value = "";
          
          swal.fire({
            title: "welcome new user",
            text: "account created successfully",
            icon: "success",
          });
          setTimeout(() => {
            signUpClose.click();
            signInModal.click();
          }, 2000);
        } else if (isUserRegistered.email !== signUpEmail.value) {
          newUser = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
          };
          localStorage.setItem("userDetails", JSON.stringify(newUser));
          signUpName.value = "";
          signUpEmail.value = "";
          signUpPassword.value = "";
          swal.fire({
            title: "welcome new user",
            text: "account created successfully",
            icon: "success",
          });
          setTimeout(() => {
            signUpClose.click();
            signInModal.click();
          }, 2000);
        } else {
          swal.fire({
            title: "email already exists",
            text: "use any other email address",
            icon: "info",
          });
          signUpName.value = "";
          signUpEmail.value = "";
          signUpPassword.value = "";
        }
      } else {
        swal.fire({
          title: "Invalid password",
          text: "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character",
          icon: "error",
        });
      }
    } else {
      Swal.fire({
        title: "Invalid email",
        text: "Email should be in correct format",
        icon: "error",
      });
      return;
    }
  } else {
    Swal.fire({
      title: "Invalid name",
      text: "Name should only contain alphabets and spaces",
      icon: "error",
    });
    return;
  }
  // if (
  //   signUpName.value === "" ||
  //   signUpEmail.value === "" ||
  //   signUpPassword.value === ""
  // ) {
  //   Swal.fire({
  //     title: "Input field required",
  //     text: "Kindly fill all input fields",
  //     icon: "error",
  //   });
  // } else {
  //   // adding values in object
  //   newUser.name = signUpName.value;
  //   newUser.email = signUpEmail.value;
  //   newUser.password = signUpPassword.value;
  //   console.log(newUser);
  //   signUpName.value = "";
  //   signUpEmail.value = "";
  //   signUpPassword.value = "";
  //   let userData = JSON.stringify(newUser);
  //   localStorage.setItem("userData", userData);
  //   Swal.fire({
  //     title: "Account has been created",
  //     text: "For taking test kindly login",
  //     icon: "success",
  //   });
  //   signUpClose.click();
  //   signInModal.click();
  // }
});

// sign in
let signInEmail = document.querySelector("#signInEmail");
let signInPassword = document.querySelector("#signInPassword");

let signIn = document.querySelector("#sumitSignIn");
signIn.addEventListener("click", () => {
  let userData = JSON.parse(localStorage.getItem("userDetails"));
  console.log(userData);
  if(userData === null){
    console.log("null")
    Swal.fire({
      title: "email error",
      text: "email not found",
      icon: "error",
    });
  } else if(signInEmail.value === userData.email){
    if(signInPassword.value === userData.password){
       Swal.fire({
         title: "login success",
         text: "WELCOME",
         icon: "SUCCESS",
       });
       let isLoggedIn = localStorage.setItem("isLoggedIn", true)
       location.assign("./courses/subject.html");
    }else{
        Swal.fire({
          title: "incorrect password",
          text: "kindly enter correct password",
          icon: "error",
        });
    }
  } else {
    Swal.fire({
      title: "email error",
      text: "email not found",
      icon: "error",
    });
  }


  // if (signInEmail.value === "" || signInPassword.value === "") {
  //   Swal.fire({
  //     title: "Input field required",
  //     text: "Kindly fill all input fields",
  //     icon: "error",
  //   });
  // } else if (
  //   signInEmail.value === data.email &&
  //   signInPassword.value === data.password
  // ) {
  //   userName = document.querySelector("#user-name");
  //   console.log(userName);
  //   signInEmail.value = "";
  //   signInPassword.value = "";
  //   location.assign("./courses/subject.html");
  // } else {
  //   console.table(signInEmail.value, signInPassword.value);
  //   Swal.fire({
  //     title: "Email Or Password is invalid",
  //     text: "Kindly fill all input fields properly",
  //     icon: "error",
  //   });
  // }
});

window.onload = function checkIsLoggedIn (){
  let isLoggedIn = localStorage.getItem("isLoggedIn")
  console.log(isLoggedIn)
  if(isLoggedIn === "true"){

    window.location.assign("./courses/subject.html")
  }
}