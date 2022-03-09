const PENDING = 'PENGING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promise {
  status;
  value;
  reason;
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}
const promise = new Promise((resolve, reject) => {
  resolve('成功');
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.error('reason');
  },
);
// 无法处理异步
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  }, 1000);
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.error('reason');
  },
);
