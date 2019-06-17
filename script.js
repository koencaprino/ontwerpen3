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


//Freestylaa

function playSample(sampleName){
    var sample = document.getElementById(sampleName);
    sample.play();
    document.getElementById("10crack").volume = 0.3;
    document.getElementById("illest").volume = 0.3;
    document.getElementById("ifyou").volume = 0.5;
     document.getElementById("checkit").volume = 1;
    document.getElementById("ah").volume = 0.5;
}
