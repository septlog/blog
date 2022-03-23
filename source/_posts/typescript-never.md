---
title: typescript-never
date: 2022-03-22 22:42:35
tags:
---

never 表示不应该存在的类型，用于穷尽性检查

```typescript
type Shape = 'circle' | 'rect';
function getShape(shape: Shape) {
  switch (shape) {
    case 'circle':
      break;
    case 'rect':
      break;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```
