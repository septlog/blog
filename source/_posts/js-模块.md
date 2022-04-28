---
title: js-模块
date: 2022-04-26 17:45:37
tags:
---

```js
function CoolModule() {
  var something = 'cool';

  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(' ! '));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

这个模式在 JavaScript 中被称为模块。最常见的实现模块模式的方法通常被称为模块暴露，

CoolModule 可以被调用任意多次，每次调用都会创建一个新的模块实例

## 模块单例模式

```js
var foo = (function CoolModule() {
  var something = 'cool';
  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(' ! '));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

模块模式另一个简单但强大的变化用法是，命名将要作为公共 API 返回的对象

```js
var foo = (function CoolModule(id) {
  function change() {
    // 修改公共 API
    publicAPI.identify = identify2;
  }
  function identify1() {
    console.log(id);
  }
  function identify2() {
    console.log(id.toUpperCase());
  }
  var publicAPI = {
    change: change,
    identify: identify1,
  };
  return publicAPI;
})('foo module');
foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
```

模块有两个主要特征：（1）为创建内部作用域而调用了一个包装函数；（2）包装函数的返回
值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭
包。
