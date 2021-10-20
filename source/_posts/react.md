---
title: react
date: 2021-10-20 22:22:55
tags:
---

```tsx
// 当 state 改变的时候，触发 rerender，即使 ComponentA 和 ComponentB 有相同的节点，这些节点也会被 rerender
{
  state ? <ComponentA /> : <ComponentB />;
}
```

```tsx
// 当 state 改变的时候，触发 rerender，即使 ComponentA 和 ComponentB 有相同的节点，这些节点也会被 rerender
function Child() {
  // 当父组件 state 改变的时候，该语句会被触发
  console.log('log');
  useEffect(() => {
    // 当父组件 state 改变的时候，该语句会只会触发一次
    console.log('effect');
  }, []);
  return <div></div>;
}
```
