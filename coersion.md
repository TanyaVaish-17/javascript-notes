# Type Coercion in JavaScript

- Type coercion means JavaScript automatically converts one data type into another when performing operations.
- JS is loosely typed, so it tries to adjust types automatically.

## 🔹 1. Implicit Type Coercion (Automatic)  

**Example 1:**
```
"5" + 2
```
- 👉 Result: "52" (number 2 becomes string)
- Because + with a string → string concatenation.  

**Example 2:**
```
"5" - 2
```
- 👉 Result: 3 (string "5" becomes number)
- Because - only works with numbers.  

**Example 3:**
```
true + 1
```
- 👉 Result: 2

## 🔹 2. Explicit Type Coercion (Manual)
```
Number("10")   // 10
String(20)     // "20"
Boolean(1)     // true
```

> **🔥 == vs ===**
```
5 == "5"   // true  (type coercion happens)
5 === "5"  // false (no coercion, strict check)
```
- 👉 == allows coercion
- 👉 === does NOT allow coercion (recommended)