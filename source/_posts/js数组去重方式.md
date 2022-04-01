---
title: js数组去重方式
date: 2022-04-01 19:01:16
tags:
---

1. es6 Set

2. 双重 for 循环 + splice

```js
function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
```

3. 利用 indexOf 或 includes 方法去重

```js
function unique(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) === -1) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

function unique2(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
```

4. 排序后相邻元素比对去重

```js

```

5. 利用对象的属性不能相同的特点去重

6. Array.prototype.filter

```js
function unique(arr) {
  return arr.filter((item, index) => {
    // indexOf start from 0
    return arr.indexOf(item, 0) === index;
  });
}
```
