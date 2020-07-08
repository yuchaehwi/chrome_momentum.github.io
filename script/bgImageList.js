const bodyImg = document.querySelector("body>img");

BGIMAGES_LS = "bgImages";

function localStorageSet(imageTargetSrc){
    localStorage.setItem(BGIMAGES_LS, imageTargetSrc);
}

function printSelectBgImage(selectBgImage) {
    bodyImg.src = selectBgImage;
}

function changeImage(input){
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      console.log(reader);
      reader.readAsDataURL(input.files[0]);
      reader.onload = function (e) {
         bodyImg.src = e.target.result;
         localStorage.setItem(BGIMAGES_LS, e.target.result);
     }
   }
}

function init() {
    const loadBgImage = localStorage.getItem(BGIMAGES_LS);
    if (loadBgImage != null) {
        printSelectBgImage(loadBgImage);
    }
}

$(function () {
    const $imageListArray = [
        {imageCourse : "./images/bgImage1.jpg",name:"bgImage1",image_sCourse:"./images/bgImage_s1.png"},
        {imageCourse : "./images/bgImage2.jpg",name:"bgImage2",image_sCourse:"./images/bgImage_s2.png"},
        {imageCourse : "./images/bgImage3.jpg",name:"bgImage3",image_sCourse:"./images/bgImage_s3.png"},
        {imageCourse : "./images/bgImage4.jpg",name:"bgImage4",image_sCourse:"./images/bgImage_s4.png"},
        {imageCourse : "./images/bgImage5.jpg",name:"bgImage5",image_sCourse:"./images/bgImage_s5.png"}
    ];

    $.each($imageListArray,function($index,$no){
        $("#imageList>ul").append("<li class='bgImageList'></li>");
        $(".bgImageList").eq($index).css({"background-image":"url(" + $imageListArray[$index].image_sCourse + ")"});
    });
    $("#imageList>ul").append("<li><input type='file' class='image-list-file' id='imageListFileBtn' accept='image/*' onchange='changeImage(this);'></li>");

    $(".bgImageList").click(function(){
        var $imageListNum = $(this).index();
        $(".bgImage").attr("src",$imageListArray[$imageListNum].imageCourse);
        localStorageSet($imageListArray[$imageListNum].imageCourse);
    });
});



init();