// let num = 2;
// switch (num) {
//   case 1:
//     console.log("Data 1");
//     break;
//   case 2:
//     console.log("Data 1");
//     break;
//   case 3:
//     console.log("Data 1");
//     break;
//   case 4:
//     console.log("Data 1");
// }

// let marks = 85;
// let grade;

// switch (true) {
//   case marks >= 90 && marks <= 100:
//     grade = "A+";
//     break;
//   case marks >= 80 && marks < 90:
//     grade = "A";
//     break;
//   case marks >= 70 && marks < 80:
//     grade = "B";
//     break;
//   case marks >= 60 && marks < 70:
//     grade = "C";
//     break;
//   case marks >= 50 && marks < 60:
//     grade = "D";
//     break;
//   case marks >= 0 && marks < 50:
//     grade = "F (Fail)";
//     break;
//   default:
//     grade = "Invalid Marks";
// }

// console.log(`Marks: ${marks}, Grade: ${grade}`);

// const day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// function calculate(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "Invalid operator";
//   }
// }

// console.log(calculate(10, 5, "+"));
// console.log(calculate(10, 5, "-"));
// console.log(calculate(10, 5, "*"));
// console.log(calculate(10, 5, "/"));

// let i = 0;
// while (i < 3) {
//   console.log("Num:", i);
//   i++;
// }

function userData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Jatin", age: "23" });
    }, 1000);
  });
}

userData().then((user) => console.log(user));
