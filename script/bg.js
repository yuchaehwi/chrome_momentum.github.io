const body = document.querySelector("body");
const IMG_NUMBER = 5;


function paintImage(imgNumber){
    const image = new Image();
    image.src = "./images/bgImage" + imgNumber + ".jpg";
    image.classList.add("bgImage");
    body.prepend(image);
}

function getRandom(){
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();