const toDoForm = document.querySelector(".js-todoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList"),
   toDoLists = document.querySelector(".js-toDoList>li");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
   const btn = event.target;
   const li = btn.parentNode;
   toDoList.removeChild(li);
   const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id != parseInt(li.id);
   });
   toDos = cleanToDos;
   saveToDos();
}

function saveToDos() {
   localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //js 데이터를 저장할 수 없음
   //JSON.stringify() -> js data를 string으로 변환
}

function printToDo(text) {
      const li = document.createElement("li");
      const delBtn = document.createElement("button");
      const span = document.createElement("span");
      const newId = Number(toDos.length) + 1;
      delBtn.addEventListener("click", deleteToDo);
      span.innerText = text;
      li.appendChild(span);
      li.appendChild(delBtn);
      li.id = newId;
      delBtn.innerText = "Ｘ";
      toDoList.appendChild(li);
      const toDoObj = {
         text: text,
         id: newId
      };
      toDos.push(toDoObj);
      saveToDos();
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const currentTodoValue = toDoInput.value;
   printToDo(currentTodoValue);
   toDoInput.value = "";
}

function loadToDos() {
   const loadedToDos = localStorage.getItem(TODOS_LS);
   if (loadedToDos != null) {
      const parsedToDos = JSON.parse(loadedToDos); //다시 js에서 불러올 수 있도록 js data형식으로 변환
      parsedToDos.forEach(function (toDo) {
         //   checkToDo(toDo.text);
         printToDo(toDo.text);
      });
   }
}

function init() {
   loadToDos();
   toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();