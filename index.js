// -----------------------Index Page --------------------
// source arry, changes every 3 seconds
var imgArry = ["imgs/1.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg", "imgs/6.jpg", "imgs/7.jpg"]
var source = document.getElementById("img_source")
var index = 1

function img_source() {
	source.setAttribute("src", imgArry[index])
	index = index + 1
	if (index > 5) {
		index = 0
	}
}

setInterval(img_source,3000)
