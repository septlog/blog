---
title: typescript type literal
date: 2022-05-24 10:53:09
tags:
---

```ts
type PortPosition = 'left' | 'right' | 'top' | 'bottom';

type PortDirection = 'in' | 'out';
type PortType = `${PortDirection}${Capitalize<PortPosition>}`; // type PortType = "inLeft" | "inRight" | "inTop" | "inBottom" | "outLeft" | "outRight" | "outTop" | "outBottom"
```
