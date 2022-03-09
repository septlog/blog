---
title: js instanceof 原理
date: 2022-03-09 10:36:26
tags: js
---

A instanceof B

Instanceof 的判断队则是：沿着 A 的\_\_proto\_\_这条线来找，同时沿着 B 的 prototype 这条线来找，如果两条线能找到同一个引用，即同一个对象，那么就返回 true。如果找到终点还未重合，则返回 false。

```js
Function instanceof Object; // true
Function.__proto__.__proto__ === Object.prototype; // true

Object instanceof Function; // true
Object.__proto__ === Function.prototype; // true
```

![1](1.png)
