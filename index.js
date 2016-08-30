// -----------------------Index Page --------------------
// source arry, changes every 3 seconds
var imgArry = ["imgs/1.jpeg", "imgs/2.jpeg", "imgs/3.jpeg", "imgs/4.jpeg", "imgs/5.jpeg", "imgs/6.jpeg", "imgs/7.jpeg", "imgs/8.jpeg", "imgs/9.jpeg", "imgs/10.jpeg", "imgs/11.jpeg", "imgs/12.jpeg", "imgs/13.jpeg", "imgs/14.jpeg", "imgs/15.jpeg", "imgs/16.jpeg", "imgs/17.jpeg", "imgs/18.jpeg", "imgs/19.jpeg", "imgs/20.jpeg", "imgs/21.jpeg", "imgs/22.jpeg", "imgs/23.jpeg", "imgs/24.jpeg", "imgs/25.jpeg", "imgs/26.jpeg", "imgs/27.jpeg", "imgs/28.jpeg", "imgs/29.jpeg", "imgs/30.jpeg", "imgs/31.jpeg", "imgs/32.jpeg", "imgs/33.jpeg", "imgs/34.jpeg", "imgs/35.jpeg", "imgs/36.jpeg", "imgs/37.jpeg", "imgs/38.jpeg", "imgs/39.jpeg", "imgs/40.jpeg", "imgs/41.jpeg", "imgs/42.jpeg", "imgs/43.jpeg", "imgs/44.jpeg", "imgs/45.jpeg", "imgs/46.jpeg", "imgs/47.jpeg", "imgs/48.jpeg", "imgs/49.jpeg", "imgs/50.jpeg", "imgs/51.jpeg", "imgs/52.jpeg", "imgs/53.jpeg", "imgs/54.jpeg", "imgs/55.jpeg", "imgs/56.jpeg", "imgs/57.jpeg", "imgs/58.jpeg", "imgs/59.jpeg", "imgs/60.jpeg", "imgs/61.jpeg"]
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

