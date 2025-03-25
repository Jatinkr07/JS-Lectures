//Objects
// const studentOne = {
//   name: "Jatin",
//   address: "123ABC",
// };

// const studentTwo = {
//   name: "Jatin",
//   address: "123ABC",
// };

//ES6 Classes
class UserProfile {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greetUser() {
    // console.log(`Get login credential here ${this.name}`);
    console.log("Get user data ---->", this.name);
  }
}

const getUserData = new UserProfile("Jatin", 23);
const getUserData2 = new UserProfile("Rehul", 13);

getUserData.greetUser();
getUserData2.greetUser();
