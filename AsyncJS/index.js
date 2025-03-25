// const greetUser = (name, callback) => {
//   console.log(`Hello, ${name}!`);
//   callback();
// };

// const showMessage = () => {
//   console.log("Welcome to JS CallBack Class!");
// };

// greetUser("Rahul", showMessage);
// greetUser("Jatin", showMessage);
// greetUser("Hiten", showMessage);

//callback hell
console.log("Order pizza...");

setTimeout(() => {
  console.log("Dough ready...");
  setTimeout(() => {
    console.log("Toppings added...");
    setTimeout(() => {
      console.log("Pizza baked...");
      setTimeout(() => {
        console.log("Pizza delivered!");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
