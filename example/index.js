//3rd example : solution

class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amt) {
    this.balance = this.balance + amt;
    // this.balance += amt;
    console.log(
      `₹${amt} deposited successfully,  New balance list: ₹${this.balance}`
    );
  }
}

const account = new BankAccount("Rohit", 5000);
console.log("Variable data ----->", account);
account.deposit(2000);

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   applyDiscount(discount) {
//     this.price = this.price - discount;
//     console.log(`New price of ${this.name}: ₹${this.price}`);
//   }
// }

// const product = new Product("Laptop", 50000);
// product.applyDiscount(5000);

// class Vehicle {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   showDetails() {
//     console.log(`Vehicle: ${this.brand} model : ${this.model}`);
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model, fuelType, price) {
//     super(brand, model);
//     this.fuelType = fuelType;
//     this.price = price;
//   }

//   showCarDetails() {
//     console.log(
//       `Car: ${this.brand} Model: ${this.model}, Fuel: ${this.fuelType} Price : ${this.price}`
//     );
//   }
// }

// const car1 = new Car("Toyota", "BYD", "Petrol", 30000);
// car1.showDetails();
// car1.showCarDetails();

// get(retrieve);
class Person {
  constructor(name) {
    this.name = name;
  }

  name(md) {
    console.log(md);
  }
}

const res = new Person();
res.name("Chacha");
console.log(res.name);

//set (modify or update)
// class Person {
//   constructor(name) {
//     this._name = name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// const resName = new P("Jack Sparrow");
// resName.name = "Tony";
// console.log(resName._name);
