---
title: react useLayoutEffect
date: 2021-10-31
tags: react
---

useEffect 可以满足大部分的需求。

useLayoutEffect 和 useEffect 实现的功能类似，唯一的区别在于 useEffect 是异步执行，而 useLayoutEffect 是同步执行。

useLayoutEffect 会在重绘之前触发，而 useEffect 不是，所以在使用 useEffect 的时候可能会出现页面元素一闪的情况，使用 useLayoutEffect 可以解决这个一闪的问题。

项目中根据实际需求选择 useEffect 还是 useLayoutEffect。
