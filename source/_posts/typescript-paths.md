## typescript paths

typescript paths 可以使我们告别相对路径，例如我有如下文件：
packageA
|--main
|--a.ts
packageB
|--main
|--b.ts

> a.ts

```ts
export function abcde() {
  console.log('abcde');
}
```

> b.ts

```ts
import { abcde } from '../../packageA/main/a.ts';
abcde();
```

如果我们用 typescript paths 就可以很好的解决相对路径造成的繁琐的问题。

> tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "packageA/*": ["./packageA/*"]
    }
  }
}
```

修改后的代码为：

> a.ts

```ts
export function abcde() {
  console.log('abcde');
}
```

> b.ts

```ts
import { abcde } from 'packageA/main/a.ts';
abcde();
```
