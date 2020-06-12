var loadTime; // Defining the loading time variable
function loadPage() {
  loadTime = setTimeout(showPage, 1000); // After 1 second, load the page
}
function showPage() {
  document.getElementById("loader").style.display = "none"; // Remove the loading spinner
  document.getElementById("main").style.display = "block"; // Show the page content
}

// Slideshow stuff
var slideIndex = [1,2,3,4,5,6,7]; //An array whose length is based on how many slideshows there are (doesn't matter what the numbers are)
var slideId = ["slides1", "slides2", "slides3", "slides4", "slides5", "slides6", "slides7"]; // An array containing the classes of each slideshow

// These lines show the slides of each slideshow, with the second number being the slideshow index (i.e. 0 = "slides1", 1 = "slides2", etc.) and the first number being the first slide of each slideshow
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
// The function that shows the next or previous slide
function plusSlides(whichSlide, whichSlideShow) {
  showSlides(slideIndex[whichSlideShow] += whichSlide, whichSlideShow);
}
// The function that loads the slideshows
function showSlides(whichSlide, whichSlideShow) {
  var i;
  var x = document.getElementsByClassName(slideId[whichSlideShow]); // Gets the slideshow
  if (whichSlide > x.length) {slideIndex[whichSlideShow] = 1} // If the current slide is past the number of images in the slideshow, bring it back to the beginning
  if (whichSlide < 1) {slideIndex[whichSlideShow] = x.length} // if the current slide is below the number of images in the slideshow, bring it to the beginning
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  // Hide the image by default
  }
  x[slideIndex[whichSlideShow]-1].style.display = "block";  
}

// This function shows the top navigation bar when the window is a specific size (defined in the CSS file)
/*function topNav() {
  var x = document.getElementById("topnav"); // Getting the topnav
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/