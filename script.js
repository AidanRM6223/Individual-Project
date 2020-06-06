var loadTime;
function loadPage() {
  loadTime = setTimeout(showPage, 1000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}

// slideshow stuff
// Add comments to this file describing what each line does if you can.
var slideIndex = [1,1,1]; 
var slideId = ["slides1", "slides2", "slides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
function plusSlides(n, no) {
// You should rename your variables similar to this: function plusSlides(whichSlide, whichSlideShow) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// navstuff
function topNav() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}