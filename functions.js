var verde = document.getElementById("verde").addEventListener("click", changeGreen);
var blanco = document.getElementById("blanco").addEventListener("click", changeWhite);
var amarillo = document.getElementById("amarillo").addEventListener("click", changeYellow);

var borde_verde = document.getElementById("borde_verde").addEventListener("click", changeBorderGreen);
var borde_blanco = document.getElementById("borde_blanco").addEventListener("click", changeBorderWhite);
var borde_amarillo = document.getElementById("borde_amarillo").addEventListener("click", changeBorderYellow);

function changeGreen(){
    var a=document.getElementsByClassName("ventana");
		for (var i=0; i<a.length; i++) a[i].style.backgroundColor="#62ff3b";
}

function changeWhite(){
    var a=document.getElementsByClassName("ventana");
		for (var i=0; i<a.length; i++) a[i].style.backgroundColor="white";
}

function changeYellow(){
    var a=document.getElementsByClassName("ventana");
		for (var i=0; i<a.length; i++) a[i].style.backgroundColor="yellow";
}

function changeBorderGreen(){
  var a = document.getElementsByClassName("ventana");
  for (var i=0; i<a.length; i++) a[i].style.border="2px solid #62ff3b"
}

function changeBorderWhite(){
  var a = document.getElementsByClassName("ventana");
  for (var i=0; i<a.length; i++) a[i].style.border="2px solid white"
}

function changeBorderYellow(){
  var a = document.getElementsByClassName("ventana");
  for (var i=0; i<a.length; i++) a[i].style.border="2px solid yellow"
}
