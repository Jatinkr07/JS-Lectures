class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eating.......`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} Meowww.......`);
  }
}

const cat1 = new Cat("Tommy");

cat1.eat();
cat1.meow();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} bol raha hai.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} (${this.breed}) bhonk raha hai.`);
//   }
// }

// const dog1 = new Dog("Tommy", "German Shepherd");

// dog1.speak();
// dog1.bark();
