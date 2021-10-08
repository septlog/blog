---
title: run multiple npm scripts in parallel
date: 2021-10-08 17:26:50
tags:
---

install npm-run-all as devDep.

> package.json

```json
"scripts": {
    "multiple":"run-p a b c d",
    "a": "...",
    "b": "...",
    "c": "...",
    "d": "...",
}
```
