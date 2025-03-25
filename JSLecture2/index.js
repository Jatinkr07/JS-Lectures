//Unary Operator
// let age = 18;
// let result = age >= 18 ? "I Can Vote" : "I Cannot Vote";
// console.log(result);

//if-else
// let marks = 97;

// if (marks >= 95 && marks <= 100) {
//   console.log("A");
// } else if (marks <= 85) {
//   console.log("B");
// } else if (marks <= 75) {
//   console.log("C");
// } else if (marks <= 65) {
//   console.log("D");
// } else {
//   console.log("Fail");
// }

// let paymentMethod = "PayPal";

// switch (paymentMethod) {
//   case "Credit Card":
//     console.log("Processing Credit Card payment...");
//     break;
//   case "PayPal":
//     console.log("Processing PayPal payment...");
//     break;
//   case "UPI":
//     console.log("Processing UPI payment...");
//     break;
//   default:
//     console.log("Invalid payment method.");
// }

//while loop
// let username = "";

// while (username === "") {
//   username = prompt("Enter your username:");
// }

// console.log(`Welcome, ${username}!`);

// let i = 0;
// while (i < 3) {
//   console.log("Num:", i);
//   i++;
// }

// let products = "Batman";

// for (let data of products) {
//   console.log(data);
// }

//For-Each
// let productsPrice = [100, 200, 700, 900];

// productsPrice.forEach((data) => {
//   console.log(data);
// });

// productsPrice.forEach((num, index, arr) => {
//   arr[index] *= 0.9;
// });
// console.log(productsPrice);

//Functions

function myMsg(a) {
  return function () {
    console.log(`Assemble: ${a}`);
  };
}

const rvlData = myMsg("Avengers");
rvlData();
