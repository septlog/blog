class Apple {}
let apple = new Apple();

let apple2 = {};
Object.setPrototypeOf(apple2, Apple.prototype);

console.log(apple2 instanceof Apple);
