
var loadTime;
function loadPage() {
  loadTime = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("home").style.visibility = "visible";
}
