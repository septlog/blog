new Promise((resolve, reject) => {
  resolve('ok');
}).then(
  (value) => {
    console.log(value);
    console.log(this);
  },
  (reason) => {
    console.error(reason);
  },
);
