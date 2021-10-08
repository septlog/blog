---
title: typescript-utility-types
date: 2021-10-08 09:10:56
tags:
---

1. Partial\<Type\>

Partial\<Type\> 中的属性和 Type 中的属性一样，但都为可选项。例如：

```ts
interface Todo {
  id: number;
  content: string;
  done: boolean;
}

let todo1: Partial<Todo> = {
  id: 1,
};
let todo2: Partial<Todo> = {
  content: 'todo2',
};

let todo3: Partial<Todo> = {
  id: 2,
  done: true,
};
let todo4: Partial<Todo> = {
  content: 'todo4',
  done: false,
};
```

2. Required\<Type\>

Required\<Type\> 类型中的属性和 Type 中的属性一样，但都为必填项。例如：

```ts
interface Todo {
  id: number;
  content: string;
  done?: boolean;
}

let todo: Required<Todo> = {
  id: 1,
  content: 'todo',
  done: true,
};

// 报错：Property 'done' is missing in type '{ id: number; content: string; }' but required in type 'Required<Todo>'.
let todo1: Required<Todo> = {
  id: 1,
  content: 'todo1',
};
```

3. Readonly\<Type\>

Readonly\<Type\> 类型中的属性和 Type 中的属性一样，但都为 readonly，表示不可再赋值。例如：

```ts
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
};

// 报错：Cannot assign to 'title' because it is a read-only property.
todo.title = 'Hello';
```

4. Record\<Keys, Type\>

Record\<Keys, Type\> 类型创建的对象中，对象的 key 的类型为 Keys，value 的类型为 Type。例如：

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};
```

5. Pick\<Type, Keys\>

Pick\<Type, Keys\> 类型表示从 Type 中挑选一部分属性，Keys 的值为 keyof Type，类型为 string 或者 union of string。例如：

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
// 报错：Type '"n"' does not satisfy the constraint 'keyof Todo'.
type NotTodoPick = Pick<Todo, 'n'>;
```

6. Omit\<Type\>

Omit\<Type, Keys\> 类型表示从 Type 中移除一部分属性，Keys 的值为 keyof Type，类型为 string 或者 union of string。例如：

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};
```

7. Exclude\<Type, ExcludedUnion\>

Exclude\<Type, ExcludedUnion\> 类型中的属性是 Type 和 ExcludedUnion 属性的差。例如：

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
// T0 = "b" | "c";
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
// T1 = "c";
type T2 = Exclude<string | number | (() => void), Function>;
// T2 = string | number;
```

8. Extract<Type, Union>

Extract<Type, Union> 类型中的属性是 Type 和 Union 属性的交集。例如：

```ts
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
// T0 = "a"
type T1 = Extract<string | number | (() => void), Function>;
// T1 = () => void
```

9. NonNullable\<Type\>

NonNullable\<Type\> 类型将 Type 中的 null 和 undefined 类型。例如：

```ts
type T0 = NonNullable<string | number | undefined>;
// T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
// T1 = string[]
```

10. Parameters\<Type\>

Parameters\<Type\> 用于将函数类型 Type 的入餐返回一个 tuple。例如：

```ts
declare function f1(arg: { a: number; b: string }): void;

type T0 = Parameters<() => string>;
// T0 = []
type T1 = Parameters<(s: string) => void>;
// T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
// T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;
// T3 = [arg: {
    a: number;
    b: string;
}]
type T4 = Parameters<any>;
// T4 = unknown[]
type T5 = Parameters<never>;
// T5 = never
type T6 = Parameters<string>;
// 报错：Type 'string' does not satisfy the constraint '(...args: any) => any'.
// T6 = never
type T7 = Parameters<Function>;
// 报错：Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.
// T7 = never
```

11. ConstructorParameters\<Type\>

例子：

```ts
type T0 = ConstructorParameters<ErrorConstructor>;

type T0 = [message?: string]
type T1 = ConstructorParameters<FunctionConstructor>;

type T1 = string[]
type T2 = ConstructorParameters<RegExpConstructor>;

type T2 = [pattern: string | RegExp, flags?: string]
type T3 = ConstructorParameters<any>;

type T3 = unknown[]

type T4 = ConstructorParameters<Function>;
Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
  Type 'Function' provides no match for the signature 'new (...args: any): any'.

type T4 = never
```

12. ReturnType\<Type\>

ReturnType\<Type\> 是方法类型返回值类型。例子：

```ts
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>;
// T0 = string
type T1 = ReturnType<(s: string) => void>;
// T1 = void
type T2 = ReturnType<<T>() => T>;
// T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// T3 = number[]
type T4 = ReturnType<typeof f1>;
// T4 = {
//     a: number;
//     b: string;
// }
type T5 = ReturnType<any>;
// T5 = any
type T6 = ReturnType<never>;
// T6 = never
type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.

// type T7 = any
type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'. Type 'Function' provides no match for the signature '(...args: any): any'.
// T8 = any
```

13. InstanceType\<Type\>

InstanceType\<Type\> 类型是实例对象的类型。例子：

```ts
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
// T0 = C
type T1 = InstanceType<any>;
// T1 = any
type T2 = InstanceType<never>;

// T2 = never
type T3 = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.

// T3 = any
type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'. Type 'Function' provides no match for the signature 'new (...args: any): any'.

// T4 = any
```
