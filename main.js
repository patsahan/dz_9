
var video = document.getElementById("my-video");
var playButton = document.getElementById("playButton");


function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


playButton.addEventListener("click", togglePlay);

function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.style.display = navbar.style.display === "none" ? "block" : "none";
  }
