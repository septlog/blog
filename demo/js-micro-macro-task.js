asyncTest().then((value) => {
  console.log(value);
});
new Promise((resolve) => {
  console.log('外层宏事件2');
  resolve();
})
  .then(() => {
    console.log('微事件1');
  })
  .then(() => {
    console.log('微事件2');
  });
setTimeout(() => {
  //执行后 回调一个宏事件
  console.log('内层宏事件3');
}, 0);
console.log('外层宏事件1');

async function asyncTest() {
  console.log('abcd');
  return 'ebnf';
}
