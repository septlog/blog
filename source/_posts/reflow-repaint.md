---
title: reflow-repaint
date: 2022-02-14 14:16:31
tags: browser js
---

reflow，常译为**重排**或**回流**

repaint，重绘

网页生成过程：

1. html 被 html 解析器解析成 DOM 树
2. css 被 css 解析器解析成 CSSOM 树
3. 结合 DOM 树和 CSSOM 树，生成一棵渲染树
4. 生成布局（flow）
5. 将布局绘制到屏幕上（paint）

第四步和第五步是**最耗时的**，这两步合起来，就是通常说的**渲染**

重排（reflow）必然导致重绘（repaint），而重绘不一定会导致重排

### 重排

#### 概念：

当 DOM 的变化影响了元素的位置或尺寸大小，浏览器需要重新计算元素的位置或尺寸大小，这个过程叫重排

#### 常见引起重排的情况

1. 添加或删除可见的 DOM 元素
2. 元素尺寸改变————margin、padding、border、width、height
3. 内容变化————比如用户在 input 框中输入文字
4. 浏览器尺寸窗口改变
5. 设置 style 的值
6. 计算 offsetWidth 和 offsetHeight 属性

#### 重排影响的范围

- 全局范围
- 局部范围

#### 尽可能减少重排的次数、重排范围

### 重绘

#### 概念

当一个元素的外观发生改变，但没有改变布局
