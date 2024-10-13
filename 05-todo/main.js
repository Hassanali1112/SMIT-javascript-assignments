const inputElem = document.querySelector(".inputElem");
const addBtn = document.querySelector(".add-btn");
const todoWrapper = document.querySelector(".todo-wrapper");
addBtn.addEventListener("click", function () {
  let newTodo = document.createElement("li");
  newTodo.classList.add("item");
  todoWrapper.appendChild(newTodo);
  // text Element
  newTextElem = document.createElement("div");
  newTextElem.classList.add("text");
  newTextElem.setAttribute("contenteditable", "");
  newTextElem.textContent = inputElem.value;
  newTodo.appendChild(newTextElem);
  // btn container with three buttons
  newBtnWrapper = document.createElement("div");
  newBtnWrapper.classList.add("btns");
  newTodo.appendChild(newBtnWrapper);
// three buttons
// edit
let editBtn = document.createElement("button")
editBtn.classList.add("edit"); 
editBtn.textContent = "Edit";
newBtnWrapper.appendChild(editBtn)
// delete btn
let deleteBtn = document.createElement("button")
deleteBtn.classList.add("remove");
deleteBtn.textContent = "Delete";
newBtnWrapper.appendChild(deleteBtn)
// done btn
let doneBtn = document.createElement("button")
doneBtn.classList.add("done");
doneBtn.textContent = "Done";
newBtnWrapper.appendChild(doneBtn)

  console.log(newTodo);
});
