// let getData = new Promise((resolve, reject) => {
//   let isValid = false;
//   if (isValid) {
//     resolve("success");
//   } else {
//     reject("something wrong");
//   }
// });

// console.log("DATA ---->", getData);

//https://jsonplaceholder.typicode.com/users/1

// function bankDetail(amt) {
//   return new Promise((resolve, reject) => {
//     if (amt > 500) {
//       resolve("Payment Successfully Done!!!!");
//     } else {
//       reject("Server Default");
//     }
//   });
// }

// bankDetail(500)
//   .then((res) => console.log(res))
//   .catch((error) => {
//     console.log(error);
//   });

// function getData() {
//   fetch("https://fakestoreapi.com/carts")
//     .then((res) => res.json())
//     .then((result) => {
//       console.log("products data----->", result);
//     })
//     .catch((err) => {
//       console.log("Something wrong", err);
//     });
// }

// getData();

// let getAuthorization = new Promise((resolve, reject) => {
//   let isUserValid = false;
//   if (isUserValid) {
//     resolve("User are permitted!!");
//   } else {
//     reject("Something went wrong");
//   }
// });

// console.log(getAuthorization);

// function bankDetail(amt) {
//   return new Promise((resolve, reject) => {
//     if (amt > 100) {
//       setTimeout(() => {
//         resolve("Payment Successfully Done!!!!");
//       }, 3000);
//     } else {
//       reject("Server Default");
//     }
//   });
// }

// bankDetail(500)
//   .then((res) => console.log(res))
//   .catch((error) => {
//     console.log(error);
//   });

// const getData = async () => {
//   try {
//     let uservalid = false;
//     if (uservalid) {
//       console.log("Resolve");
//     } else {
//       console.log("Error");
//     }
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

// getData();

const userData = async () => {
  try {
    let response = await fetch("https://dummyjson.com/todos");
    // console.log(response);
    // let data = response.json();
    console.log(data);
  } catch (err) {
    console.log("Error", err);
  }
};

userData();
