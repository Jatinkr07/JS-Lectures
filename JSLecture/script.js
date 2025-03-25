// function changeText() {
//   document.getElementById("title").innerText = "Welcome to JS";
// }

// document.getElementById("myButton").addEventListener("click", function () {
//   console.log("Clicked");
//   alert("Button Clicked!");
// });

// class Person {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   Info() {
//     console.log(
//       `Data of Student: \n ${this.name} \n  his/her age is ${this.age} \n  Address is ${this.address}`
//     );
//   }
// }

// const studentOne = new Person("Amit", 25, "Noida");
// const studentTwo = new Person("Adarsh", 35, "Delhi");

// studentOne.Info();
// studentTwo.Info();

// const a = ["Thor", "Batman", "Spiderman"];
// const b = ["Superman", "Deadpool", "Captain America"];
// // const c = a.concat(b);
// // console.log(c);
// a.push("Black Widow");
// const arr = [...a, b];

// console.log(arr);

// let numbers = [20, 45, 60];
// console.log(numbers);
// let dNum = numbers.map((num) => num % 2 === 0);
// console.log(numbers);

// console.log(dNum);

// console.log(5 | 8);

// let age = 18;
// let result = age >= 18 ? "I Can Vote" : "I Cannot Vote";
// console.log(result);

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

// let a = "12";
// let b = 12;
// let c = a === b;
// console.log(c);

//callback

// function orderCoffee(callback) {
//   setTimeout(() => {
//     console.log(" Coffee ordered.");
//     callback();
//   }, 2000);
// }

// function orderBanana(callback) {
//   setTimeout(() => {
//     console.log(" Banana ordered.");
//     callback();
//   }, 1000);
// }

// function makeShake(callback) {
//   setTimeout(() => {
//     console.log(" Shake is ready.");
//     callback();
//   }, 1500);
// }

// function serveShake() {
//   console.log(" Shake served. Enjoy!");
// }

// orderCoffee(() => {
//   orderBanana(() => {
//     makeShake(() => {
//       serveShake();
//     });
//   });
// });

//promise
const myPromise = new Promise((resolve, reject) => {
  let status = true;
  if (status) {
    resolve("Data is Fetched...");
  } else {
    reject("Data is Reject due to some failure");
  }
});

myPromise.then((msg) => console.log(msg)).catch((err) => console.log(err));

//Promise
function orderCoffee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Coffee ordered.");
      resolve();
    }, 2000);
  });
}

function orderBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Banana ordered.");
      resolve();
    }, 1000);
  });
}

function makeShake() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Shake is ready.");
      resolve();
    }, 1500);
  });
}

function serveShake() {
  console.log(" Shake served. Enjoy!");
}

orderCoffee()
  .then(orderBanana)
  .then(makeShake)
  .then(serveShake)
  .catch((error) => console.log(" Error:", error));
