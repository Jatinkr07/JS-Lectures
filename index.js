// const Arr = ["Arr1", "Arr2", "Arr3"];
// console.log(Arr);
// Arr.push("Arr4", "Arr5");
// console.log(Arr);
// Arr.pop();
// console.log(Arr);
// Arr.pop();
// Arr.pop();
// console.log(Arr);

// let a = 10;
// let b = 20;
// let c = 20;
// let d = a + b + c;
// console.log("SUM: ", d);

// let a = 10,
//   b = 10;

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a > b);
// console.log(a <= b);

// function printTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }
// printTable(5);
// Higher-Order Function

function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => (y !== 0 ? x / y : "Cannot divide by zero");

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Enter valid numbers!";
  } else {
    if (operator === "+") result = operate(num1, num2, add);
    else if (operator === "-") result = operate(num1, num2, subtract);
    else if (operator === "*") result = operate(num1, num2, multiply);
    else if (operator === "/") result = operate(num1, num2, divide);
  }

  document.getElementById("result").innerText = result;
}
