let colorCode = 0;
let container = document.querySelector("#container");
let image = document.querySelector("#image");
let heading = document.querySelector("#heading");
let profession = document.querySelector("#profession");

let name_change = document.querySelector("#name_change");
name_change.addEventListener("click", function () {
  let input = document.querySelector("#input");
  heading.textContent = input.value;
  input.value = "";
});

let profe_change = document.querySelector("#profe_change");
profe_change.addEventListener("click", function () {
  profession.textContent = input.value;
  input.value = "";
});

let img_change = document.querySelector("#img_change");
img_change.addEventListener("click", function () {
  let input = document.querySelector("#input");
  image.src = input.value;
  input.value = "";
});
let bg_change = document.querySelector("#bg_change");
bg_change.addEventListener("click", function () {
 
  let colors = [
    "#acddde",
    "#caf1de",
    "#e1f8dc",
    "#fef8dd",
    "#ffe7c7",
    "#f7d8ba",
    "#7effd4",
    "#70ebba",
    "#64d8a7",
    "#58bd95",
    "#4b9d7d",
    "#40846e",
  ];
  container.style.backgroundColor = colors[colorCode];
  console.log(colors[colorCode])
  colorCode++;
  if(colorCode == colors.length){
    colorCode = 0;
  }
});
let reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
  heading.textContent = "John Doe";
  profession.textContent = "Software Engineer";
  image.src = "./images/profile.jpg";
  container.style.backgroundColor = "rgba(128, 128, 128, 0.294)";
  colorCode = 0;
})

