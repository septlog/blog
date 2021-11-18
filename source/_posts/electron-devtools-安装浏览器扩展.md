---
title: electron devtools 安装浏览器扩展
date: 2021-11-18 10:02:37
tags: electron
---

[devtools-extension](https://www.electronjs.org/docs/latest/tutorial/devtools-extension)
[issue](https://github.com/electron/electron/issues/23662)

如果安装不上，尝试：

```js
app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(
    reactDevToolsPath,
    { allowFileAccess: true }, //this is the key line
  );
});
```
