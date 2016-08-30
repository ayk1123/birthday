// -----------------------Index Page --------------------
// source arry, changes every 3 seconds
var imgArry = ["imgs/1.jpg", "http://placehold.it/800x550", "http://placehold.it/1000x400", "http://placehold.it/700x500", "http://placehold.it/800x450"]
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

