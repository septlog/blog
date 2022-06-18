// 'use strict';

const obj = {
  a: 1,
  getA() {
    return this.a;
  },
};

console.log(obj.getA());
let getA = obj.getA;
console.log(getA());
