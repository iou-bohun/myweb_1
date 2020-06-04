var temp;

function press(f){
  var input = document.getElementById("input").value;
  temp = input;
  document.getElementById("output").value = temp;
}

function changeColor(){
  var txtareacolor = document.getElementById("textarea_color");
  var targetString = txtareacolor.value;//option value 값//
  // var selectText = color.options[select.selectedIndex].value; option index 값
    document.getElementById("output").style.color = targetString;
}

var nav = document.getElementsByClassName("row");

   window.onscroll = function sticky() {
     if(window.pageYOffset > nav[0].offsetTop) {
       nav[0].classList.add("nav");
     } else {
       nav[0].classList.remove("nav");
     }
   }
