const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing",
GREETING_CURRENT = "Hello ",
GREETING_CHANGE = "Good morging ";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //엔터해도 텍스트 내용 삭제 안됨
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = GREETING_CURRENT + text;
}

function askForName(){
    form.classList.add(SHOWING_CN); //입력창 보이게
    form.addEventListener("submit",handleSubmit); //form넘기기
}

function getName() {
    const currentUser = localStorage.getItem(USER_LS); //로컬스토리지에서 currentUser값 가져옴
    if (currentUser == null) { //currentUser값이 없는 경우
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    getName();
}

init();