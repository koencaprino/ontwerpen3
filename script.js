//https://www.codespeedy.com/play-audio-with-time-delay-javascript/
var audio = document.getElementById('audio');

setTimeout(function () {
    audio.play();
}, 16500);



//https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
