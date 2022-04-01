// 支持异步的 promise 实现
//
const PENDING = 'PENGING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';
class Promise {
  status;
  value;
  reason;
  // 存放成功的回调
  onResolvedCallbacks = [];
  // 存放失败的回调
  onRejectedCallbacks = [];

  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    // 如果是异步的，resolve 或 reject 方法会在 onFulfilled 方法或 onRejected 方法之后执行
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
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    // 如果还在 pending，就把 onFulfilled 或 onRejected 放到 对应的数组里面
    if (this.status === PENDING) {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      });
    }
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  }, 1000);
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.error(reason);
  },
);
