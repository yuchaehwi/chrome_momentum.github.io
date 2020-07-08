var calendarCurrentDisplay;

$(function () {
   var $calendarPositionTop;
   var $calendarPositionLeft;

   $("#calendarContent").datepicker();
   $("#calendarSection").draggable();

   setInterval(function () {
      $calendarPositionTop = $("#calendarSection").css("top");
      $calendarPositionLeft = $("#calendarSection").css("left");
      localStorage.setItem("calendarPositionTop", $calendarPositionTop);
      localStorage.setItem("calendarPositionLeft", $calendarPositionLeft);
   }, 500);

   $(".calendar-minimize").click(function(){
      $("#calendarContent").slideUp();
      $(".calendar-minimize").hide();
      $(".calendar-maximize").show();
   });

   $(".calendar-maximize").click(function(){
      $("#calendarContent").slideDown();
      $(".calendar-minimize").show();
      $(".calendar-maximize").hide();
   });

   $("#calendarClose").click(function(){
      $("#calendarSection").fadeOut();
      localStorage.setItem("calendarDisplay", "none");
   })
});

function handleCalendarClick() {
   if (calendarSection.style.display == "none" || calendarSection.style.display=="") {
      calendarCurrentDisplay = "block";
   } else {
      calendarCurrentDisplay = "none";
   }
   localStorage.setItem("calendarDisplay", calendarCurrentDisplay);
}

function init() {
   document.getElementById("calendar").addEventListener("click", handleCalendarClick);
   const loadCalendarDisplay = localStorage.getItem("calendarDisplay");
   const loadCalendarPositionTop = localStorage.getItem("calendarPositionTop");
   const loadCalendarPositionLeft = localStorage.getItem("calendarPositionLeft");
   if (loadCalendarDisplay != null) {
      calendarSection.style.display = loadCalendarDisplay;
      calendarSection.style.top = loadCalendarPositionTop;
      calendarSection.style.left = loadCalendarPositionLeft;
   }
}

init();