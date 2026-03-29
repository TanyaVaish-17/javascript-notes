# Variables

## 2.1 var (OLD - Avoid mostly)
- Function scoped  
- Can be redeclared  
- Can be reassigned
- Hoisted with undefined  
- Causes bugs → avoid in modern JS

## 2.2 let (MODERN — Use this)  
- Block scoped {}  
- Cannot be redeclared in same scope
- Can be reassigned  
- Hoisted but NOT initialized (TDZ)

## 2.3 const (MOST SAFE)  
- Block scoped
- Cannot be redeclared
- Cannot be updated
- Must be initialized at declaration

## ⚡ Temporal Dead Zone (TDZ)
- Time between variable hoisting and its initialization
- During this time → variable exists but cannot be accessed
- Accessing variables during TDZ gives -> `Reference Error`

### 🔥 TDZ with let and const
```
console.log(a); // ❌ ReferenceError
let a = 10;
```

>🧩 How JS sees this:
```
// Hoisted (but uninitialized)
let a;

// TDZ starts here
console.log(a); // ❌ error

// TDZ ends here
a = 10;
```

### VAR - NO TZN ❌
```
console.log(a); // undefined
var a = 10;
```

>🧩 How JS sees this:
```
var a = undefined; // initialized during hoisting

console.log(a); // undefined
a = 10;
```