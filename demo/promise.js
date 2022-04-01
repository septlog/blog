// new Promise((resolve, reject) => {
//   resolve('ok');
// }).then(
//   (value) => {
//     console.log(value);
//     console.log(this);
//   },
//   (reason) => {
//     console.error(reason);
//   },
// );

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
  }, 1000);
});

promise
  .then((value) => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('ok2');
    //   }, 1000);
    // });
    return promise;
  })
  .then(
    (value) => {
      console.log(value);
    },
    () => {},
  );
