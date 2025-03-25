// const dataGet = (document.getElementById("data").innerText = "Hello");
// console.log("Data ---> ", dataGet);

// function changeText() {
//   document.getElementById("data").innerText = "Change you see here..";
// }

// const changeText = () => {
//   document.getElementById("data").innerText = "Change you see here..";
// };

// const changeColor = () => {
//   document.getElementById("dom").style.backgroundColor = "red";
//   document.getElementById("dom").style.color = "white";
// };

// const changeText = () => {};

// let dataGet = (document.getElementById("demo").innerText = "JS change this");

// console.log(dataGet);

// function changeUI() {
//   document.getElementById("demo").innerText = "JS change this";
//   document.getElementById("demo").style.backgroundColor = "green";
//   document.getElementById("demo").style.color = "ghostWhite";
// }

// function changeFont() {
//   document.getElementById("dem").style.fontFamily = "poppiens";
// }

function changeClassUI() {
  let dataGet = document.getElementsByClassName("class");
  for (let i = 0; i < dataGet.length; i++) {
    dataGet[i].innerText = "JS HERE";
  }
  document
    .getElementById("change")
    .setAttribute(
      "src",
      "https://th.bing.com/th?id=ODL.9ef10b070251c0dec5aa316b99596e29&w=145&h=96&c=10&rs=1&qlt=99&o=6&cb=15&pid=AlgoBlockDebug"
    );
}
