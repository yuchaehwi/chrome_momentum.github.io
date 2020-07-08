var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var range = document.getElementById("jsRange");
var mode = document.getElementById("jsMode");
var save = document.getElementById("jsSave");
var reset = document.getElementById("jsReset");
var colorPicker = document.getElementById("colorPicker");
var image = document.getElementById("jsImage");
var back = document.getElementById("jsBack");

var INITIAL_COLOR = "#2c2c2c";
var CANVAS_WIDTH_SIZE = 1600;
var CANVAS_HEIGHT_SIZE = 800;
// const canvas = document.getElementById("jsCanvas");
// const ctx = canvas.getContext("2d");
// const colors = document.getElementsByClassName("jsColor");
// const range = document.getElementById("jsRange");
// const mode = document.getElementById("jsMode");
// const save = document.getElementById("jsSave");
// const reset = document.getElementById("jsReset");
// const colorPicker = document.getElementById("colorPicker");
// const image = document.getElementById("jsImage");
// const back = document.getElementById("jsBack");

// const INITIAL_COLOR = "#2c2c2c";
// const CANVAS_WIDTH_SIZE = 1600;
// const CANVAS_HEIGHT_SIZE = 800;

canvas.width = CANVAS_WIDTH_SIZE;
canvas.height = CANVAS_HEIGHT_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_WIDTH_SIZE, CANVAS_HEIGHT_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

var painting = false;
var filling = false;
// let painting = false;
// let filling = false;

var arrayColors = [];
// const arrayColors = [];

for (var i = 0; i < colors.length; i++) {
   arrayColors.push(colors[i].style.backgroundColor);
}

function stopPainting() {
   painting = false;
}

function startPainting() {
   painting = true;
}

function onMouseMove(event) {
   var x = event.offsetX;
   var y = event.offsetY;
   // const x = event.offsetX;
   // const y = event.offsetY;
   if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y);
   } else {
      ctx.lineTo(x, y);
      ctx.stroke();
   }
}

function handleColorClick(event) {
   for(var i=0;i<colors.length;i++){
      colors[i].classList.remove("jsColorClick");
   }
   event.target.classList.add("jsColorClick");
   var color = event.target.style.backgroundColor;
   // const color = event.target.style.backgroundColor;
   ctx.strokeStyle = color;
   ctx.fillStyle = color;
}

function handleRangeChange(event) {
   ctx.lineWidth = event.target.value;
   range.title = event.target.value;
}

function handleModeClick() {
   if (filling === true) {
      filling = false;
      mode.innerText = "Fill";
   } else {
      filling = true;
      mode.innerText = "PAINT";
      ctx.fillStyle = ctx.strokeStyle;
   }
}

function handleCanvasClick() {
   if (filling) {
      ctx.fillRect(0, 0, CANVAS_WIDTH_SIZE, CANVAS_HEIGHT_SIZE);
   }
}

function handleCM(event) {
   event.preventDefault();
}

function handleSaveClick() {
   var image = canvas.toDataURL("image/png");
   var link = document.createElement("a");
   // const image = canvas.toDataURL("image/png");
   // const link = document.createElement("a");
   link.href = image;
   link.download = "paint";
   link.click();
}

function handleResetClick(){
   ctx.clearRect(0, 0, CANVAS_WIDTH_SIZE, CANVAS_HEIGHT_SIZE);
}

function handleColorPickerClick(){
   var selectColorPicker = colorPicker.value;
   var selectCode1 = parseInt(selectColorPicker.substring(0,2),16);
   var selectCode2 = parseInt(selectColorPicker.substring(2,4),16);
   var selectCode3 = parseInt(selectColorPicker.substring(4,6),16);
   var selectRGBCode = "rgb(" + selectCode1 + ", " + selectCode2 + ", " + selectCode3 + ")";
   // const selectColorPicker = colorPicker.value;
   // const selectCode1 = parseInt(selectColorPicker.substring(0,2),16);
   // const selectCode2 = parseInt(selectColorPicker.substring(2,4),16);
   // const selectCode3 = parseInt(selectColorPicker.substring(4,6),16);
   // const selectRGBCode = "rgb(" + selectCode1 + ", " + selectCode2 + ", " + selectCode3 + ")";
   ctx.strokeStyle = selectRGBCode;
   ctx.fillStyle = selectRGBCode;
}

function handleChangeClick(file){
   if(window.FileReader) {
      var files  = file.target.files[0];
      var reader = new FileReader();
      if (files && files.type.match('image.*')) {
        reader.readAsDataURL(files);
      }
      // 
      reader.onload = function(evt) {
         var image = new Image();
         image.onload = function() {
            ctx.drawImage(image, 10, 10);
         };
         image.src = evt.target.result;
      };
    }
}

if (canvas) {
   canvas.addEventListener("mousemove", onMouseMove);
   canvas.addEventListener("mousedown", startPainting);
   canvas.addEventListener("mouseup", stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
   canvas.addEventListener("click", handleCanvasClick);
   canvas.addEventListener("contextmenu", handleCM);
}

arrayColors.forEach(function (index, no) {
   colors[no].addEventListener("click", handleColorClick);
});

if (range) {
   range.addEventListener("input", handleRangeChange);
}

if (mode) {
   mode.addEventListener("click", handleModeClick);
}

if (save) {
   save.addEventListener("click", handleSaveClick);
}

if(reset){
   reset.addEventListener("click",handleResetClick);
}

if(colorPicker){
   colorPicker.addEventListener("change",handleColorPickerClick);
}

if(image){
   image.addEventListener("change",handleChangeClick);
}

if(back){
   back.addEventListener("click",handleBackClick);
}