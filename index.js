// -----------------------Index Page --------------------
// source arry, changes every 3 seconds
var imgArry = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg", "imgs/6.jpg", "imgs/7.jpg"]
var source = document.getElementById("img_source")
var index = 0

function slideShow() {
    source.className += "fadeOut";
    setTimeout(function() {
        source.src = imgArry[index];
        source.className = "";
    },2000);
    index++;
    if (index == imgArry.length) { index = 0; }
    setTimeout(slideShow, 6000);
}

slideShow();

