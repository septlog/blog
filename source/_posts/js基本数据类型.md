---
title: js数据类型
date: 2022-02-22 18:09:47
tags:
  - js
  - 面试
---

js 中，原始数据类型（primitive）不是一个对象（object），并且没有方法（method）

js 共有七种原始数据类型，分别是 undefined，null，number，string，boolean，symbol，bigint。

引用数据类型 object

原始数据类型存放在栈（stack）中

引用数据类型存放在堆（heap）中

typeof 关键字用于判断数据的类型

instanceof 关键字可以正确判断数据的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型，但是不能用来判断基本数据类型

constructor 有两个作用，一是判断数据的类型，二是对象实例（instance）通过 constructor 对象访问它的构造函数
