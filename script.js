window.addEventListener("load", function () {
  // code here when the page is loaded using Javascript
});

$(document).ready(function () {
  // code here when the page is loaded using jQuery
});

// selector in js
document.getElementById("idName");
document.getElementsByClassName("className");
document.getElementsByTagName("p");

// selector in jQuery
$(".className");
$("p");
$("#idName");

// click handler js
var button = document.getElementById("idName");

button.addEventListener("click", function () {
  // code here
});

// jQuery

$("#idName").click(function () {
  // code here
});

// js css
document.getElementsByTagName("p").style.display = "none";
document.getElementsByTagName("p").style.background = "white";

// jQuery css
$("p").css({ "background-color": "white", display: "none" });

$(".className").hide();

// <img src="img.png" width="50"/>
$("img").attr("src", "img2.png");
$("img").attr("width", "100");

$(".className").height(50);

$(".className").text("daniel's car");
$(".className").text('daniel\'s car');













// what user selected it can be lebanon, cyprus 
var userSelect = "lebanon";

var wikiURL= "https://en.wikipedia.org/wiki/"+userSelect
