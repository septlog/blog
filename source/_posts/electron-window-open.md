---
title: electron-window-open
date: 2022-02-09 17:55:05
tags:
---

window.open 可以打开一个新的窗口，

```js
let newWindow = window.open(url);
<!-- newWindow.document.body.appendChild() -->
newWindow.addEventListener('load',()=>{
    console.log('新窗口加载完成');
    newWindow.document.body.innerHTML = '<div>hello world</div>'
})
```
