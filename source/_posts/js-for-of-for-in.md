---
title: js-for-of-for-in
date: 2021-09-23 22:17:34
tags: js
---

```js
let arr = [1, 2, 3, 4];
for (let i in arr) {
  console.log(i); // 0, 1, 2, 3
}

let obj = { apple: 1, banana: 2, orange: 3 };
for (let i in obj) {
  console.log(i); // apple, banana, orange
}
for (let i of obj) {
  console.log(i); // Uncaught TypeError: obj is not iterable
}
```

for ... of 允许遍历一个含有 iterator 接口的数据结构（数组、对象等）并且返回各项的值。

![1](1.png)

技巧：in 不用于 'i'terables，of 不用于 'o'bject。

> https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements#comment81601989_29286412
