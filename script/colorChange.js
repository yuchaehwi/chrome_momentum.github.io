const colorList = ["#2c2c2c","#ffffff","#FF3B30","#FF9500","#FFCC00","#4CD963","#5Ac8FA","#0579FF","#5856D6"];
var colorListPrint="";

$(function(){
   $("#color>ul>li").click(function(){
      var $borderColor = "1px solid ";
      var $borderColor2 = "2px solid ";
      var $placeholderClassName = "placeholderColor";
      $colorIndex = $(this).index();
      var $fontBgColor = $("#color>ul>li").eq($colorIndex).css("background-color");
      $borderColor += $fontBgColor;
      $borderColor2 += $fontBgColor;
      $placeholderClassName += $colorIndex;
      $("#searchInput").css("color",$fontBgColor);
      $(".icon-box-mouseover").css("color",$fontBgColor);
      $("#datePrint").css("color",$fontBgColor);
      $(".js-clock > h1").css("color",$fontBgColor);
      $(".name-input").css("color",$fontBgColor);
      $(".todo-input").css("color",$fontBgColor);
      $(".js-toDoList").css("color",$fontBgColor);
      $(".greeting").css("color",$fontBgColor);
      $("#searchInput").css("border-bottom",$borderColor);
      $(".js-toDoList>li").css("border-bottom",$borderColor);
      $(".name-input").css("border-bottom",$borderColor);
      $(".todo-input").css("border-bottom",$borderColor);
      $("#datePrint").css("border-top",$borderColor);
      $("#datePrint").css("border-bottom",$borderColor);
      $(".js-toDoList>li>button").css("border",$borderColor2);
      $(".js-toDoList>li>button").css("color",$fontBgColor);

      for(var i=0;i<colorList.length;i++){
         var removeClassName = "placeholderColor" + i;
         $(".name-input").removeClass(removeClassName);
         $(".todo-input").removeClass(removeClassName);
      }
      $(".name-input").addClass($placeholderClassName);
      $(".todo-input").addClass($placeholderClassName);
      localStorage.setItem("fontColor",$fontBgColor);
      localStorage.setItem("placeHolderClass",$placeholderClassName);
   });

   $.fn.ChangeFontColor = function($colorCode){
      var $borderColor = "1px solid ";
      var $borderColor2 = "2px solid ";
      $borderColor += $colorCode;
      $borderColor2 += $colorCode;
      $("#searchInput").css("color",$colorCode);
      $(".icon-box-mouseover").css("color",$colorCode);
      $("#datePrint").css("color",$colorCode);
      $(".js-clock > h1").css("color",$colorCode);
      $(".name-input").css("color",$colorCode);
      $(".todo-input").css("color",$colorCode);
      $(".js-toDoList").css("color",$colorCode);
      $(".greeting").css("color",$colorCode);
      $("#searchInput").css("border-bottom",$borderColor);
      $(".js-toDoList>li").css("border-bottom",$borderColor);
      $(".name-input").css("border-bottom",$borderColor);
      $(".todo-input").css("border-bottom",$borderColor);
      $("#datePrint").css("border-top",$borderColor);
      $("#datePrint").css("border-bottom",$borderColor);
      $(".js-toDoList>li>button").css("border",$borderColor2);
      $(".js-toDoList>li>button").css("color",$colorCode);
   }

   $.fn.changePlaceHolderColor = function($placeHolderClass){
      for(var i=0;i<colorList.length;i++){
         var removeClassName = "placeholderColor" + i;
         $(".name-input").removeClass(removeClassName);
         $(".todo-input").removeClass(removeClassName);
      }
      $(".name-input").addClass($placeHolderClass);
      $(".todo-input").addClass($placeHolderClass);
   }

   const loadPlaceHolderClass = localStorage.getItem("placeHolderClass");
   const loadFontColor = localStorage.getItem("fontColor");
   if (loadFontColor != null) {
      $(this).ChangeFontColor(loadFontColor);
      $(this).changePlaceHolderColor(loadPlaceHolderClass);
   }
});

function init() {
   for(var i=0;i<colorList.length;i++){
      colorListPrint += "<li style='background-color:" + colorList[i] + "'></li>";
   }
   var element = document.createElement("ul");
   element.innerHTML = colorListPrint;
   document.getElementById("color").appendChild(element);
}

init();