---
title: typescript-类型谓词
date: 2022-03-22 22:34:50
tags:
---

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  // 返回值为 pet is Fish，这就是类型谓词
  return (pet as Fish).swim !== undefined;
}
```
