const reset = document.getElementById("reset");

function handleReset(){
   confirm("All Reset!");
   localStorage.clear();
   location.reload();
}

function init(){
   reset.addEventListener("click",handleReset);
}

init();