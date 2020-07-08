$(function () {
   var $searchBrowser = [
      { title: "google", url: "https://google.co.kr/search?q=", icon: "./images/google-icon.png" },
      { title: "naver", url: "https://search.naver.com/search.naver?query=", icon: "./images/naver-icon.png" }
   ]

   $.each($searchBrowser, function ($index, $no) {
      $("#arrowBox>ul").append("<li>" + $no.title + "</li>");
      $("#arrowBox>ul>li").eq($index).append("<img src='" + $no.icon + "'>");
   });

   $("#arrowBox>ul>li").click(function () {
      var $searchBrowserIndex = $(this).index();
      $("#searchWebIcon").css("backgroundImage", "url('" + $searchBrowser[$searchBrowserIndex].icon + "')");
   });

   $("#searchWebIcon").click(function () {
      var $searchWebIconDisplay = $("#arrowBox").css("display");
      if ($searchWebIconDisplay == "none") {
         $("#arrowBox").fadeIn();
      } else {
         $("#arrowBox").fadeOut();
      }
   });

   $("#search").bind({
      mouseenter: function () {
         $("#searchInput").stop().fadeIn().css("display", "inline-block");
         $("#searchWebIcon").stop().fadeIn();
      },
      mouseleave: function () {
         $("#searchInput").stop().fadeOut();
         $("#searchWebIcon").stop().fadeOut();
      }
   });

   $("#searchInput").keydown(function (event) {
      var $inputWord = $("#searchInput").val();
      var $searchWeb = $("#searchWebIcon").css("backgroundImage");
      var $googleIconSrc = 'url("http://whi1022.dothome.co.kr/chrome_desktop_app/images/google-icon.png")'
      var $googleIconSrc1 = 'url("../images/google-icon.png")';
      if (event.keyCode == "13") {
         var openNewWindow = window.open("about:blank");
         if ($searchWeb == $googleIconSrc || $searchWeb == $googleIconSrc1) {
            openNewWindow.location.href = $searchBrowser[0].url + $inputWord;
         } else {
            openNewWindow.location.href = $searchBrowser[1].url + $inputWord;
         }
      }
   });
})