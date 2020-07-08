$(function () {
   $(".icon-box-mouseover").bind({
      mouseover : function(){
         $(".icon-box-mouseover").contents()[0].textContent = "";
         $(".icon-box").stop().animate({
            "bottom":"0px"
         });
      },
      mouseleave : function(){
         $(".icon-box-mouseover").contents()[0].textContent = "MouseOver Here!";
         $(".icon-box").stop().animate({
            "bottom":"-60px"
         });
      }
   })

   $("#browser").bind({
      mouseenter: function () {
         $("#browserList").stop().slideDown();
      },
      mouseleave: function () {
         $("#browserList").stop().slideUp();
      }
   });

   $("#imageChange").bind({
      mouseenter : function(){
         $("#imageList").stop().slideDown();
      },
      mouseleave : function(){
         $("#imageList").stop().slideUp();
      }
   });

   $("#note").click(function(){
      $noteCurrentDisplay = $("#noteInput").css("display");
      if($noteCurrentDisplay == "none"){
         $("#noteInput").fadeIn();
      } else {
         $("#noteInput").fadeOut();
      }
   });

   $("#calendar").click(function(){
      $calendarCurrentDisplay = $("#calendarSection").css("display");
      if($calendarCurrentDisplay == "none"){
         $("#calendarSection").fadeIn();
      } else {
         $("#calendarSection").fadeOut();
      }
   });

   $("#color").bind({
      mouseenter : function(){
         $("#color>ul").stop().slideDown();
      },
      mouseleave : function(){
         $("#color>ul").stop().slideUp();
      }
   });
});

function handlePaintClick() {
   var openNewWindow = window.open("about:blank");
   openNewWindow.location.href= "./paint.html";
}

function init() {
   document.getElementById("paint").addEventListener("click", handlePaintClick);
}

init();

