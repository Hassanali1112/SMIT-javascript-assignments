const inputElem = document.querySelector(".inputElem");
const form = document.querySelector(".new-todo");
const todoWrapper = document.querySelector(".todo-wrapper");
const todoItem = document.querySelectorAll(".item");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newTodo = document.createElement("li");
  newTodo.classList.add("item");
  todoContext = `<div class="text">${inputElem.value}</div>
            <div class="btns">
              <button class="edit">Edit</button>
              <button class="remove">Delete</button>
              <button class="done">Done</button>
            </div>`;
  newTodo.innerHTML = todoContext;
  todoWrapper.appendChild(newTodo);
  console.log(todoWrapper);

  inputElem.value = "";
});
todoWrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  }
  
  if(e.target.parentNode.parentNode.children[0].classList.contains("cut")){
    e.target.parentNode.parentNode.children[0].classList.remove("cut")
   
  }
  if (e.target.classList.contains("done")) {
    e.target.parentNode.parentNode.children[0].classList.add("cut");
  }
  if (e.target.classList.contains("edit")) {
    e.target.parentNode.parentNode.children[0].setAttribute(
      "contenteditable",
      ""
    );
    e.target.parentNode.parentNode.children[0].textContent = "";
    e.target.parentNode.parentNode.children[0].focus();
    e.target.parentNode.parentNode.children[0].addEventListener(
      "blur",
      function (e) {
        e.target.parentNode.parentNode.children[0].removeAttribute(
          "contenteditable"
        );
        e.target.parentNode.parentNode.children[0].textContent;
      }
    );
  }
});
