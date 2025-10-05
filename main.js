const textInput = document.querySelector("#textInput");
const AddBtn = document.querySelector("#AddBtn");
const MyList = document.querySelector("#MyList");
const warningText = document.querySelector("#warningText");
let todosDoneCount = document.querySelector("#todosDoneCount");
let finishedTodos = 0;
let todos = [];

AddBtn.addEventListener("click", addTodo);

function addTodo() {
  let text = textInput.value.trim();
  if (text === "") {
    warningText.textContent = "Input must not be empty";
    return;
  }

  warningText.textContent = "";

  let todo = {
    text: text,
    completed: false
  }

  todos.push(todo);

  let textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.addEventListener("click", () => doneTodo(todo, textSpan));

  let trashSpan = document.createElement("span");
  trashSpan.innerHTML = "&#128465";
  trashSpan.classList.add("trashSpanClass");
  trashSpan.addEventListener("click", ()=>removeTodo(newli,todo));
  trashSpan.style.cursor = "pointer";

  let newli = document.createElement("li");
  newli.appendChild(textSpan);
  newli.appendChild(trashSpan);
  MyList.appendChild(newli);

  textInput.value = "";
}

function doneTodo(todo,textSpan) {
  if (todo.completed === false) {
    textSpan.classList.add("done");
    todo.completed = true;
    finishedTodos++;
  }
  else{
    todo.completed = false;
    textSpan.classList.remove("done");
    finishedTodos--;
  }

  todosDoneCount.textContent = `${finishedTodos} completed`

}

 function removeTodo(newli,todo){
    MyList.removeChild(newli);

    for(i=0; i<todos.length;i++){
      if(todos[i] === todo);
        todo.splice(i,1);
        break;
    }
  };