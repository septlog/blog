---
title: js Array.from 方法
date: 2022-03-08 14:28:16
tags: js
---

Array.from() 方法对一个**类似数组**或可迭代对象创建一个新的，浅拷贝的数组实例。

**类似数组或伪数组对象**指的是拥有一个 length 属性和若干索引属性的任意对象，例如

```js
let obj = {
  0: 'hello',
  1: 'world',
  length: 2,
};
Array.from(obj); // ["hello", "world"]
```
