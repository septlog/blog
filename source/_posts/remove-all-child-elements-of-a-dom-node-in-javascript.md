---
title: Remove all child elements of a DOM node in JavaScript
---

1. innerHtml = ''
2. replaceChildren()
3. while loop

```js
while (element.lastChild) {
  element.lastChild.remove();
}
```

经过简单测试，1 和 2 的速度比 3 的速度快

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>perf</title>
  </head>
  <body>
    <script>
      for (let i = 0; i < 100000; i++) {
        let element = document.createElement('div');
        let text = document.createTextNode(i);
        element.appendChild(text);
        document.body.appendChild(element);
      }

      console.time();
      document.body.innerHTML = '';
      console.timeEnd();
      for (let i = 0; i < 100000; i++) {
        let element = document.createElement('div');
        let text = document.createTextNode(i);
        element.appendChild(text);
        document.body.appendChild(element);
      }
      console.time();
      document.body.replaceChildren();
      console.timeEnd();
      for (let i = 0; i < 100000; i++) {
        let element = document.createElement('div');
        let text = document.createTextNode(i);
        element.appendChild(text);
        document.body.appendChild(element);
      }

      console.time();
      while (document.body.lastChild) {
        document.body.lastChild.remove();
      }
      console.timeEnd();
    </script>
  </body>
</html>
```
