---
title: react hook state没变，但是额外触发了一次重渲染
date: 2022-02-21 14:23:08
tags: react
---

为什么 state 没变，还是会 rerender 一次？
class 组件，无论新 state 是否与旧 state 一样，都会 rerender；函数组件，只有在新 state 和旧 state 不一样的时候，才会 render，但是也有可能新 state 与旧 state 一样，也会 rerender。

可以参考以下链接：
https://stackoverflow.com/questions/55373878/what-are-the-differences-when-re-rendering-after-state-was-set-with-hooks-compar
https://github.com/facebook/react/issues/14810#issuecomment-462089702
https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update

我理解不了，可能 react 是这么设计的，有点反直觉

为了让 class 组件也和 functional component 的效果一致，class component 中有一个 shouldComponentUpdate 方法。

```js
// 一般会这样用
shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
        return true;
    }
    if (this.state.count !== nextState.count) {
        return true;
    }
    return false;
}
```

react 官方建议，不要用 shouldComponentUpdate 来“阻止页面重渲染”，否则可能会出现意想不到的 bug。
