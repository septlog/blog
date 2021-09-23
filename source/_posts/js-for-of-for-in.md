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
for (let i of arr) {
  console.log(i); // 1, 2, 3, 4
}
let obj = { apple: 1, banana: 2, orange: 3 };
for (let i in obj) {
  console.log(i); // apple, banana, orange
}
for (let i of obj) {
  console.log(i); // Uncaught TypeError: obj is not iterable
}
```

技巧：in 不用于 'i'terables，of 不用于 'o'bject。

> https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements#comment81601989_29286412
