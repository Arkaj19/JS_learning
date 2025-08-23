![alt text](image.png)
this Happens when there is no value provided to a function that demands an argument to be sent to it.

# Functions: 

### Q1. What is the difference in function expression and declaration with reference to hoisting?

### Q2. WHat is the argument and parameter of a function?

### Q3. What does the '...' operator mean in parameters?

### Q4: A function that does not returns anything returns undefined..

### Q5. What does it mean to say Functions are first-class citizens?
 -> This is because our functions can be treated as values, can be stored in variables, can be passed in arguments.

### Q6. What is a higher Order function?
 -> These are fns which can return a function or accept a function in its parameter

### Q7. What is a Closure? When it is created?
 -> Closure is a function that returns another function and the child function can use the parameters of the parent function.
 -> When a function "remembers" and can use variables from its outer (parent) scope even after that outer function has finished executing.

### ⚡ Think of it like this:
outer() built a backpack that contains count.
The inner function carries that backpack with it wherever it goes.
Every time you call counter(), it looks inside its backpack, updates count, and uses it.

### Q. what is the use of IIFE ? Give one real time use case ?
 -> We use IIFEs when we are ceating private variables, which we dont want to be called from anywhere.
 -> If there is any vakue that we dont want to be updated then we can do this.

 let arka = (function () {
  let score = 100;
  return {
    getScore: function () {
      console.log(score);
    },

    setScore: function (val) {
      score = val;
    },
  };
})();

 ![alt text](image-1.png)


## This is a classical example of closures.
 -> How the child functions can remember the value of their parents.
 -> Everytime we use the function created out of counter they retain the value of count.
 -> But if we were to use the main function counter() then a new count would be initialized each time.

### Counter

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let count1 = counter();
count1();
count1();

let count2 = counter();
count2();

counter()();

![alt text](image-2.png)

Confusion: Arrow and normal Function.

## Temporal Dead Zone?
 -> when we are using var if our value is not declared earlier then it gives undefined.
 -> But in case of let and const if it is not declared then it stays in the temporal dead zone, and cannot be used until we define the value.

### Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the time between entering a scope and the actual variable declaration, during which accessing a `let` or `const` variable will throw a **ReferenceError**.

---

### `var` behavior
- `var` declarations are **hoisted** to the top of their scope.  
- They are **initialized with `undefined`** right away.  
- Accessing them before their declaration does **not** throw an error, but gives `undefined`.

```js
console.log(a); // undefined ✅ (but risky)
var a = 10;

```js
console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;

```js
console.log(c); // ❌ ReferenceError (TDZ)
const c = 30;