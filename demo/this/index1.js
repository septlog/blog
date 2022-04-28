function foo() {
  // console.log(this);
  this.count++;
  function bar() {
    console.log(this);
  }
  // bar();
}
foo.count = 0;
for (let i = 0; i < 5; i++) {
  foo();
}
console.log(foo.count);
