---
title: js序列化反序列化Map
date: 2021-12-22 23:24:16
tags:
---

map 不能直接通过 JSON.stringify 方法序列化成字符串，但是 JSON.stringify 提供了第二个参数，可以对需要进行序列化的对象做更改

JSON.stringify(object, replacer);

replacer 是一个方法

```js
/**
 * value 为传入对象的属性，假如这个属性为 Map，就把它以一个对象的形式写入 json 中
 */

function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}
```

同样的，JSON.parse 也提供了第二个参数

```js
function reviver(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}
```
