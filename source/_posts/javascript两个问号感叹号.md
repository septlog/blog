---
title: javascript两个问号感叹号
date: 2021-12-09 10:51:43
tags:
---

|| 只要前面的值转成布尔值为 false，就取后面的值，否则就取前面
undefined || 1 => 1
false || 1 => 1
null || 1 => 1
'' || 1 => 1
0 || 1 => 1

?? 前面的值为 null 或 undefined，就取后面的值，否则就取前面
undefined ?? 1 => 1
false ?? 1 => false
null ?? 1 => 1
'' ?? 1 => ''
0 ?? 1 => 0

!! 将值转为布尔类型
!!undefined => false
!!false => false
!!null => false
!!'' => false
!!0 => false
