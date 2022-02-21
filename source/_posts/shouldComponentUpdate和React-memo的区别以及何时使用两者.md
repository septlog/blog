---
title: shouldComponentUpdate和React.memo的区别以及何时使用两者
date: 2022-02-21 09:02:27
tags:
---

我在网上看 react 生命周期的时候，发现一个在 class component 里面用到的 shouldComponentUpdate 方法。因为我一直用 functional component，我就去找这个方法在 functional component 里面怎么用，然后就找到了用 React.memo 方法。

shouldComponentUpdate 方法和 React.memo 方法什么时候用，区别是什么？

shouldComponentUpdate 一般用于比较 state 或 prop 有没有变化，有变化就 update，没变化就不 update，但是！！，这个功能函数组件已经替我们实现了！！（使用 hook 的好处之一？）

```js
shouldComponentUpdate(nextProps, nextState) {
////////////////////////////// 我中午的代码是 nextProps.num !== this.props.num + 2，不要这样写
    if (this.props.color !== nextProps.color) {
        return true;
    }
    if (this.state.count !== nextState.count) {
        return true;
    }
    return false;
}
```

官方不建议用 shouldComponentUpdate 或 memo 用来判断“是否需要更新组件”，容易出 bug，至于是什么 bug，官方文档里没细说。可以看一下下面的代码，至少 memo 和 shouldComponentUpdate 不是一回事。

```jsx
const FunctionComponentChild = React.memo(
  ({ width }) => {
    return <div>{width}</div>;
  },
  (prevProps, nextProps) => {
    return nextProps.width !== prevProps.width + 2;
  },
);

const FunctionComponentParent = () => {
  const [width, setWidth] = useState(100);
  return (
    <div>
      <button>+1</button>
      <button>+2</button>
      <FunctionalComponentChild width={width} />
    </div>
  );
};
```

```jsx
class ClassComponentChild {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.width === this.props.width + 2;
  }
  render() {
    return <div>{width}</div>;
  }
}

class ClassComponentParent {
  render() {
    return (
      <div>
        <button>+1</button>
        <button>+2</button>
        <ClassComponentChild width={width} />
      </div>
    );
  }
}
```

只有当需要性能优化的时候，才可能用到这两者

区别是两者判断逻辑相反，shouldComponentUpdate return true 更新，memo 第二个参数 return false 更新

我个人感觉算是历史遗留问题吧，感觉 api 太多反倒让人搞不清楚

参考链接：
https://reactjs.org/docs/react-component.html#shouldcomponentupdate
https://reactjs.org/docs/react-api.html#reactpurecomponent
