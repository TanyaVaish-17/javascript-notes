# Window

- The `window` object is the global object in browser environments.
- It represents the browser window/tab and serves as the top-level scope for all client-side JavaScript.

> Every global variable or function you declare becomes a property of window
```
var name = "Alice";
console.log(window.name); // "Alice"

function greet() { return "Hello"; }
console.log(window.greet()); // "Hello"
```

## Why var is called a "Global Variable"  

- When you declare a variable with var outside any function, JavaScript automatically attaches it as a property on the window object:
- It lives on the window object that can be accessible from anywhere ,that's `var` is called as the `global variable`.

## Why let and const doesn't get added to windows?  

- Because of how JavaScript was designed:
- var was the old way (ES5 and before)
- It automatically attaches global variables to the global object (window)
- This caused issues like:
  - accidental overwriting
  - global pollution

- 👉 So in ES6:  
  - let and const were introduced
  - They avoid attaching to window
  - More controlled + safer

## 🔑 Key Point
- window exists only in browsers
- Node.js does not have window

## 🔥 Why var behaves differently in Browser vs Node.js  

### 🌐 In Browser
- global scope = window object
- So:
```
var x = 10;
```
internally becomes:
```
window.x = 10;
```
> 👉 That’s why var is called “function-scoped + globally attached”

### ⚙️ In Node.js
- Node wraps your code inside a function like this:
```
(function(exports, require, module, __filename, __dirname) {
  var x = 10;
})();
```
- 👉 So your var x is NOT global, it is inside this function