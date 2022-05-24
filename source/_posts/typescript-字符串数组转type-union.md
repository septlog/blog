---
title: typescript 字符串数组转type union
date: 2022-05-24 10:51:34
tags:
---

```ts
const options = ['a', 'b', 'c', 'd', 'e'];
type Option = typeof options[number]; // 'a' | 'b' | 'c' | 'd' | 'e'
```
