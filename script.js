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

var shirt = document.querySelector('#shirt');
var chain = document.querySelector('#chain');
var glasses  = document.querySelector('#glasses');
var crown  = document.querySelector('#crown');
var ss  = document.querySelector('.shirt');
var sc  = document.querySelector('.chain');
var sg  = document.querySelector('.glasses');
var scr  = document.querySelector('.crown');

ss.addEventListener('click', function () {
    shirt.classList.add('fixed');
})


//Freestylaa

function playSample(sampleName){
    var sample = document.getElementById(sampleName);
    sample.play();
    document.getElementById("10crack").volume = 0.3;
    document.getElementById("illest").volume = 0.3;
    document.getElementById("ifyou").volume = 0.5;
     document.getElementById("checkit").volume = 1;
    document.getElementById("ah").volume = 0.7;
}


("#txtInput").autogrow();
//var menubutton = document.querySelector('.menubutton');
//var menuitem = document.querySelector('.menuitem');
//
//menubutton.addEventListener('click', function () {
//    menubutton.classList.toggle('menuanimatie');
//})


(document).ready(function(){
  // Add smooth scrolling to all links
  ("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      ('html, body').animate({
        scrollTop: (hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
