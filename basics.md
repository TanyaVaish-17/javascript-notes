# 📜 History & Origin of JavaScript

- Created by: 'Brendan Eich`
- Year: 1995
- Company: Netscape
- Original Name: Mocha → LiveScript → JavaScript
- Developed in just 10 days for the Netscape browser.

## 👉 Later standardized by ECMA International as ECMAScript (ES).

# 🚀 Major JavaScript Versions

- ES1 (1997) – First standard
- ES3 (1999) – Widely supported
- ES5 (2009) – strict mode, JSON support
- ES6 / ES2015 – Biggest update -- let, const, Arrow functions ()=>{}, Classes, Modules, Promises
- ES7–ES13 (2016–2022) – Smaller yearly updates -- async/await, Optional chaining ?., Nullish coalescing ??

# Properties of Javascript

## 1️⃣ High-Level Language
- A high-level language is easy for humans to read and write.
- In JavaScript:
  - You don’t manage memory manually.
  - You don’t deal with hardware directly.
  - The engine handles low-level operations for you.

## 2️⃣ Interpreted Language
- An interpreted language runs code line by line using an engine.
- JavaScript is executed by engines like:
  - Chrome → V8 engine
  - Firefox → SpiderMonkey
- Unlike compiled languages (like C++), JS doesn’t need a separate compilation step before running.
- ⚠️ Modern JS engines actually compile internally using JIT (Just-In-Time compilation), but for understanding basics, we call it interpreted.

## 3️⃣ Dynamically Typed
- In dynamically typed languages, you don’t declare data types explicitly.
- The type is decided at runtime.

## 4️⃣ Single-Threaded
- JavaScript runs on one main thread.
- It executes:
  - One task at a time
  - In a single call stack
- But then how does it handle multiple tasks?
  - 👉 With Event Loop & asynchronous behavior.

## 5️⃣ Event-Driven
- JavaScript reacts to events.
- Events can be: Button clicks, Mouse movement, API responses, Timers
- JS waits for the event and runs code only when it happens. That’s why it’s called `event-driven programming`.
- Example:
```
button.addEventListener("click", function() {
  console.log("Clicked!");
});
```

## 6️⃣ Prototype-Based Language
- JavaScript does not use traditional class-based inheritance (like Java).
- Instead, it uses prototypes.
- Every object in JS has a hidden property called: [[Prototype]]
- Objects can inherit properties from other objects.
- Example:
```
let person = {
  greet() {
    console.log("Hello");
  }
};

let student = Object.create(person);
student.greet();  
```
- Here:
- student inherits from person
- This is prototype-based inheritance

> (ES6 introduced class, but internally it still uses prototypes.)