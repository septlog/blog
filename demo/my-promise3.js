const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>'),
    );
  }

  // 只能调用一次
  let called;
};

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
    onRejected = typeof onRejected === 'function' ? onRejected : () => {};

    let promise2 = new Promise(() => {
      if (this.status === FULFILLED) {
        try {
          setTimeout(() => {
            // x 可能是一个 promise
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          }, 0);
        } catch (e) {
          reject(e);
        }
      }

      if (this.status === REJECTED) {
        try {
          setTimeout(() => {
            // x 可能是一个 promise
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject);
          }, 0);
        } catch (e) {
          reject(e);
        }
      }

      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
  }
}

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  }, 1000);
})
  .then(
    (value) => {
      return new Promise(() => {
        setTimeout(() => {
          console.log('do sth');
        }, 100);
      });
    },
    (reason) => {
      console.error(reason);
    },
  )
  .then(
    () => {},
    () => {},
  );

// new Promise(() => {
//   return new Promise(() => {
//     console.log('do sth');
//   });
// }).then(
//   (anotherPromise) => {
//     anotherPromise.then(
//       () => {},
//       () => {},
//     );
//   },
//   () => {},
// );
