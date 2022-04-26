---
title: js-提升
date: 2022-04-26 16:23:16
tags:
---

js 是一门编译语言————《你不知道的 javascript》，包括变量和函数在内的所有声明都会在任何代码被执行前首先被处理。
我们习惯将 var a = 2; 看作一个声明，而实际上 JavaScript 引擎并不这么认为。它将 var a
和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。

```js
console.log(a); // undefined
var a = 2;
```

```js
a = 2;
var a;
console.log(a); // 2
```

```js
foo();
function foo() {
  console.log(a); // undefined
  var a = 2;
}
```

```js
foo(); // 不是 ReferenceError, 而是 TypeError!
var foo = function bar() {
  // ...
};
```

函数声明和变量声明都会被提升。但是一个值得注意的细节（这个细节可以出现在有多个“重复”声明的代码中）是**函数会首先被提升**，然后才是变量。

```js
foo(); // 1
var foo;
function foo() {
  console.log(1);
}
foo = function () {
  console.log(2);
};
```
