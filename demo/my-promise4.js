class Commitment {
  PENDING = 'PENDING';
  FULFILLED = 'FULFILLED';
  REJECTED = 'REJECTED';
  status;
  result = null;
  reason = null;
  constructor(executor) {
    this.status = this.PENDING;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(result) {
    // resolve 和 reject 是在事件循环末尾调用的
    setTimeout(() => {
      if (this.status === this.PENDING) {
        this.status = this.FULFILLED;
        this.result = result;
        this.onResolvedCallbacks.forEach((callbackfn) => {
          callbackfn(this.result);
        });
      }
    }, 0);
  }

  reject(reason) {
    // resolve 和 reject 是在事件循环末尾调用的
    setTimeout(() => {
      if (this.status === this.PENDING) {
        this.status = this.REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callbackfn) => {
          callbackfn(this.reason);
        });
      }
    }, 0);
  }

  then(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
      onRejected = typeof onRejected === 'function' ? onRejected : () => {};
      if (this.status === this.FULFILLED) {
        onFulfilled(this.result);
      }
      if (this.status === this.REJECTED) {
        onRejected(this.reason);
      }

      if (this.status === this.PENDING) {
        this.onResolvedCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
      }
    });
  }
}

let commitment = new Commitment((resolve, reject) => {
  resolve('ok');
});

commitment
  .then(undefined, (reason) => {
    console.log(reason.message);
  })
  .then(
    (result) => {
      console.log(result);
    },
    (reason) => {
      console.log(reason.message);
    },
  );

Commitment.deferred = function () {
  const dfd = {};
  dfd.promise = new Commitment((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

module.exports = Commitment;
