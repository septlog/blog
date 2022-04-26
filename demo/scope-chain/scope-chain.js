var foo = 1;
{
  var foo = 2;
  {
    var foo = 3;
  }
}
console.log(foo);

let bar = 1;
{
  let bar = 2;
  {
    let bar = 3;
  }
}
console.log(bar);
