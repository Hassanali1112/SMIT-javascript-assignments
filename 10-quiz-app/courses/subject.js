 function checkIsLoggedIn (){
  let isLoggedIn = localStorage.getItem("isLoggedIn")
  if(isLoggedIn !== "true"){
    window.location.href = "../index.html"
  }
}

//  function checkIsLoggedIn() {
//    let isLoggedIn = localStorage.getItem("isLoggedIn");
//    if (isLoggedIn !== "true") {
//      window.location.href = "../../index.html";
//    }
//  }
 window.onload = checkIsLoggedIn();
 let logout = document.querySelector(".logout");
 console.log(logout)
 logout.addEventListener("click", () => {
   localStorage.setItem("isLoggedIn", false);
   checkIsLoggedIn();
 });
window.onload = checkIsLoggedIn()