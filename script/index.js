const clockContainer = document.querySelector(".js-clock"),
   clockTitle = clockContainer.querySelector("h1"),
   form = document.querySelector(".js-form"),
   input = form.querySelector("input"),
   greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
   SHOWING_CN = "showing";

function saveName(text) {
   localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
   event.preventDefault(); //엔터해도 텍스트 내용 삭제 안됨
   const currentValue = input.value;
   paintGreeting(currentValue);
   saveName(currentValue);
}

function paintGreeting(text) {
   form.classList.remove(SHOWING_CN);
   greeting.classList.add(SHOWING_CN);
   greeting.innerText = "Hello " + text;
}

function askForName() {
   form.classList.add(SHOWING_CN);
   form.addEventListener("submit", handleSubmit);
}

function getName() {
   const currentUser = localStorage.getItem(USER_LS);
   if (currentUser == null) {
      askForName();
   } else {
      paintGreeting(currentUser);
   }
}

function getTime() {
   const date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   hours = (hours < 10) ? ("0" + hours) : hours;
   minutes = (minutes < 10) ? ("0" + minutes) : minutes;
   seconds = (seconds < 10) ? ("0" + seconds) : seconds;

   clockTitle.innerText = hours + ":" + minutes + ":" + seconds;
}

function init() {
   getTime();
   setInterval(getTime, 1000);
   getName();
}

init();