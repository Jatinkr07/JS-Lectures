// document.getElementById("btn").addEventListener("mouseover", function () {
//   document.getElementById("msg").innerText = "GET Event Clicked!";
//   document.getElementById("msg").style.backgroundColor = "red";
//   console.log("Button Clicked !!!");
// });

// let textHighlighter = document.getElementById("text");
document.getElementById("text").addEventListener("mouseover", mouseOver);

function mouseOver() {
  document.getElementById("text").style.color = "red";
}

// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault();
//   document.getElementById("status").innerText = "Form Submitted Successfully!";
// });

// document.getElementById("myForm").addEventListener("submit", function (event) {
//   document.getElementById("status").innerText = "Form Submitted Successfully!";
// });
