const numbers = [1, 2, 3, 4, 5];
const duoData = numbers.map((num) => num * 2);
console.log(duoData);

//2nd
const users = [
  { name: "Aman", age: 25 },
  { name: "Pooja", age: 30 },
  { name: "Rahul", age: 22 },
  { name: "Aman", age: 25 },
  { name: "Pooja", age: 30 },
  { name: "Rahul", age: 22 },
];
// console.log(users.map((user) => user.name));
const names = users.map((user) => user.name);
console.log(names);

//3rd
const fruits = ["apple", "banana", "cherry"];
const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());

console.log(uppercaseFruits);

//filter 1st ques:
const numberData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numberData.filter((num) => num % 2 === 0);

console.log(evenNumbers);

//2nd
const userInfo = [
  { name: "Aman", age: 25 },
  { name: "Pooja", age: 30 },
  { name: "Rahul", age: 22 },
];

const findAgeAbove25 = users.filter((user) => user.age > 25);
console.log(findAgeAbove25);

//Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

console.log(newArr);

const user = { name: "Aman", age: 25 };
const updatedUser = { ...user, age: 26, city: "Delhi" };

console.log(updatedUser);
