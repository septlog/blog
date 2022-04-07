---
title: 面试官：如何理解js中的this
date: 2022-03-27 18:43:17
tags: 面试
---

思路：

1. 原型链
2. 匿名函数的 this
3. 改变 this 的方法
4. bind, apply, call 的区别

## 原型链

## 匿名函数的 this

匿名函数没有自己的 this，它指向的 this 是它上级作用域的 this

## 改变 this 的方法

bind，call，apply

## bind, apply, call 的区别

apply(thisObj, [args1, args2, ...])

call(thisObj, args1, args2, ...)

bind 和上两者的区别是 bind 是等待执行，apply 和 call 是立即执行

## 总结

this 指向的是上下文环境
