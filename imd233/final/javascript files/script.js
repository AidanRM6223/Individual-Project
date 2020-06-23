// Aidan's Javascript
var loadTime;
function loadPage() {
  loadTime = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown() {
  document.getElementById("dhruvs-Dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dhruv-dropcontent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Connors Section
var num1 = 0;
var num2 = 0;
var numbers = [0,0,0] //an array for later combination
var loopAmount = 0; //amount of looping

function combine(){ //combines the two values from the first two spots in the array
    numbers[0] = document.getElementById("NUM3").value;
    numbers[1] = document.getElementById("NUM4").value;

    numbers[2] = (numbers[0]*1+numbers[1]*1);
    document.getElementById("NUMADD").innerHTML = numbers[2];
}

function larger(){ //compares which is larger
  num1 = document.getElementById("NUM1").value;
  num2 = document.getElementById("NUM2").value;

    if(num1 > num2){
      document.getElementById("NUMSIZE").innerHTML = num1;
    }
    else if(num2 > num1){
      document.getElementById("NUMSIZE").innerHTML = num2;
    }
    else{
      document.getElementById("NUMSIZE").innerHTML = num1;
    }

}

function spinnn(){ //loops the multiplication until the value is completed
  loopAmount = document.getElementById("NUM5").value;
    var temp = 1;
    while(loopAmount != 0){
        loopAmount--;
        temp *= 2;
    }
    document.getElementById("LOOPRESULT").innerHTML = temp;
}


