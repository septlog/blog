---
title: set-timeout-0-promise-async-await
date: 2021-09-24 15:33:53
tags: js
---

```js
setTimeout(() => {
  // 逻辑代码。。。
}, 0);
```

相当于

```js
await new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(something)
  }, 0);
});
// 逻辑代码
```
