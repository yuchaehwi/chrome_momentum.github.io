const note = document.getElementById("note");
const noteInput = document.getElementById("noteInput");

const Note_LS = "NoteContent";
const NoteDisplay_LS = "NoteDisplay";

var NoteContent;

$(function () {
   var $notePositionTop;
   var $notePositionLeft;
   $("#noteInput").draggable();

   $("#note").click(function(){
      $noteCurrentDisplay = $("#noteInput").css("display");
      if($noteCurrentDisplay == "none"){
         $noteCurrentDisplay = "block";
      } else {
         $noteCurrentDisplay = "none";
      }
      localStorage.setItem("NoteDisplay", $noteCurrentDisplay);
   });

   $("#close").click(function(){
      $("#noteInput").fadeOut();
      $noteCurrentDisplay = $("#noteInput").css("display");
      if($noteCurrentDisplay == "none"){
         $noteCurrentDisplay = "block";
      } else {
         $noteCurrentDisplay = "none";
      }
      localStorage.setItem("NoteDisplay", $noteCurrentDisplay);
   });

   $("#minimize").click(function(){
      $("#noteContent").slideUp();
      $("#minimize").css("display","none");
      $("#maximize").css("display","block");
   });

   $("#maximize").click(function(){
      $("#noteContent").slideDown();
      $("#minimize").css("display","block");
      $("#maximize").css("display","none");
   });

   setInterval(function(){
      $notePositionTop = $("#noteInput").css("top");
      $notePositionLeft = $("#noteInput").css("left");
      $noteWidthSize = $("#noteContent").css("width");
      $noteHeightSize = $("#noteContent").css("height");
      $("#noteInput").css("width",$noteWidthSize);
      $(".note-nav").css("width",$noteWidthSize);
      localStorage.setItem("NotePositionTop", $notePositionTop);
      localStorage.setItem("NotePositionLeft", $notePositionLeft);
      localStorage.setItem("NoteWidth", $noteWidthSize);
      localStorage.setItem("NoteHeight", $noteHeightSize);
   });
});

function init() {
   const loadNote = localStorage.getItem("NoteContent");
   const loadNoteDisplay = localStorage.getItem("NoteDisplay");
   const loadNotePositionTop = localStorage.getItem("NotePositionTop");
   const loadNotePositionLeft = localStorage.getItem("NotePositionLeft");
   const loadNoteWidth = localStorage.getItem("NoteWidth");
   const loadNoteHeight = localStorage.getItem("NoteHeight");
   if (loadNoteDisplay != null) {
      noteInput.style.display = loadNoteDisplay;
      noteContent.value = loadNote;
      noteInput.style.top = loadNotePositionTop;
      noteInput.style.left = loadNotePositionLeft;
      noteInput.style.width = loadNoteWidth;
      noteNav.style.width = loadNoteWidth;
      noteContent.style.width = loadNoteWidth;
      noteContent.style.height = loadNoteHeight;
   }

   if (performance.navigation.type == 1) {
      localStorage.setItem("NoteContent", noteContent.value);
   }
   
   setInterval(function(){
      NoteContent = noteContent.value;
      localStorage.setItem("NoteContent", NoteContent);
   },500);
}

init();