$(function () {
   const $browser = [
      { title: "naver", image: "./images/naver.svg", course: "https://www.naver.com/" },
      { title: "google", image: "./images/google.svg", course: "https://www.google.co.kr" },
      { title: "daum", image: "./images/daum.svg", course: "https://www.daum.net" },
      { title: "youtube", image: "./images/youtube.svg", course: "https://www.youtube.com" }
   ]

   $.each($browser, function ($index, $no) {
      console.log($browser[$index].image);
      $("#browserList>ul").append("<li><img src='" + $browser[$index].image + "'></li>");
   });

   $("#browserList>ul>li").click(function () {
      var $browserIndex = $(this).index();
      var openNewWindow = window.open("about:blank");
      openNewWindow.location.href = $browser[$browserIndex].course;
   });
});