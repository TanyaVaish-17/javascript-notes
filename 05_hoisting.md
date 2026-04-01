# 🧠 What is Hoisting?

- 👉 Hoisting = JavaScript moves declarations to the top of their scope before execution
- ⭐ Happens during memory creation phase (execution context)

## 🔥 1. Hoisting with var
```
console.log(a); // undefined
var a = 10;
```

### 🧩 How JS interprets it:
```
var a;            // hoisted
console.log(a);   // undefined
a = 10;
```

### ⭐ Key Points:

- ⭐ Declaration hoisted
- ⭐ Initialization NOT hoisted
- ⭐ Default value = undefined


## ⚔️ 2/3. Hoisting with let and const
```
console.log(a); // ❌ ReferenceError
let a = 10;
```

### 🧩 How JS interprets it:
```
// hoisted BUT not initialized
let a;

// TDZ here ❌
console.log(a);

// initialized here
a = 10;
```

### ⭐ Key Points:
- ⭐ Hoisted ✅
- ⭐ Not initialized ❌
- ⭐ TDZ applies ⚠️

## 🧠 4. Function Hoisting

### 🔹 Function Declaration (Fully Hoisted ✅)
- ⭐ Works because entire function is hoisted
```
sayHello();
function sayHello() {
  console.log("Hello");
}
```

### 🔹 Function Expression (Not Fully Hoisted ❌)

```
sayHi(); // ❌ error
var sayHi = function () {
  console.log("Hi");
};
```

### 🧩 Behind the scenes:
```
var sayHi = undefined;
sayHi(); // ❌ calling undefined
sayHi = function () {};
```

## 🔥 5. Arrow Functions
- ⭐ Behaves like const → TDZ applies
```
sayHey(); // ❌ error
const sayHey = () => {
  console.log("Hey");
};
```