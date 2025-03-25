//without callback

// function fetchData() {
//   setTimeout(() => {
//     console.log("Data fetched!");
//   }, 2000);
// }

// fetchData();
// console.log("Next step...");

//with callback

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "Phone", price: "$800" };
//     callback(data);
//   }, 2000);
// }

// fetchData(function (data) {
//   console.log("Data Received:", data);
// });

console.log("Order pizza...");

setTimeout(() => {
  console.log("Dough ready...");
  setTimeout(() => {
    console.log("Toppings added...");
    setTimeout(() => {
      console.log("Pizza baked...");
      setTimeout(
        () => {
          console.log("Pizza delivered!");
        },
        setTimeout(() => {
          console.log(" Pizza Eatingg....!");
        }, 1000),
        1000
      );
    }, 1000);
  }, 1000);
}, 1000);
