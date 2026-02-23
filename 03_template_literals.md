# Template Strings (Template Literals) in JavaScript

- Template strings (also called template literals) are used to create strings in a cleaner and more powerful way in JavaScript.
- They use `backticks (``)` instead of quotes:

## Special Features:

### 1️⃣ String Interpolation (Most Important)
- You can insert variables inside strings.
```
let name = "Tanya";
let year = 1;

let msg = `Hello, my name is ${name} and I am in ${year} year.`;
console.log(msg);
```
>✅ No need for + concatenation.

### 2️⃣ Multi-line Strings
- No need for \n.
```
let text = `This is line 1
This is line 2
This is line 3`;

console.log(text);
```

### 3️⃣ Expressions Inside ${}
- You can write calculations:
```
let a = 5;
let b = 10;

console.log(`Sum is ${a + b}`);
```

### 4️⃣ Function Calls Inside Template String
```
function greet(name) {
  return `Hello ${name}`;
}

console.log(`${greet("Tanya")}, welcome!`);
```

### They are used in :
- Dynamic class names
- API URLs
- Dynamic HTML rendering
- Styled components

