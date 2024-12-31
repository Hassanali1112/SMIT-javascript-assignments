// logo

let body = document.querySelector("body");
let modeBtn = document.querySelector(".mode");
let logOutBtn = document.querySelector(".logout")

modeBtn.addEventListener("click", () => {
  setMode();
});
let setMode = () => {
  if (modeBtn.checked) {
    localStorage.setItem("mode", "dark");
    checkMode();
  } else {
    localStorage.setItem("mode", "light");
    checkMode();
  }
};
let checkMode = () => {
  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    modeBtn.setAttribute("checked", "checked");
    body.style.backgroundColor = "black";
    body.style.color = "blue";
  } else {
    modeBtn.removeAttribute("checked");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};
let checkDefaultMode = () => {
  let mode = localStorage.getItem("mode");
  if (mode === null) {
    body.style.backgroundColor = "white";
    body.style.color = "black";

    checkMode();
  } else {
    checkMode();
  }
};

// logOutBtn.addEventListener("click",()=>{
//   let isLoggedIn = localStorage.setItem("isLoggedIn", false);
//   if(isLoggedIn !== "true"){
//     window.location.href = "index.html"
//   }
// })
window.onload = checkDefaultMode();
