---
title: typescript-type和interface的区别
date: 2022-03-22 22:16:47
tags: typescript
---

type 扩展
通过 & 符号

interface 扩展
通过 extends 关键字

```typescript
interface A {
  id: string;
}

interface A {
  name: string;
}
let a: A = {
  id: '1',
  name: 'hello',
};
```

interface 可以通过申明同名的 interface 扩展，但是 type 不能
