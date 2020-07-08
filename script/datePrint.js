$(function(){
   var $today = new Date();
   var $year = $today.getFullYear();
   var $month = $today.getMonth()+1;
   var $date = $today.getDate();
   console.log($today);
   console.log($year, $month, $date);
   $("#datePrint").text($year + "년 " + $month + "월 " + $date + "일");
})