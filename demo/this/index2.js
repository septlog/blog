function foo() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log(this.a);
}
// foo();
var a = 1;
console.log(this.bar);
console.log(this.a);
