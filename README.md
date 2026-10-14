# JavaScript Assignments & Capstone Project

Name: Monikarnika Chakraborty
Course: JavaScript

This repository contains my practical assignments and the final capstone mini project for the JavaScript course.

Repository Structure

├──  README.md
├── assignments.js
├── capstone.js
## Assignments

| # | Topic | What it does |
|---|-------|--------------|
| 1 | Variables, Data Types, Console | Declares variables with `var`, `let` and `const` (name, age, employment status, skills) and prints each one's type using `typeof`. |
| 2 | Operators, Expressions, Input | Takes a bill amount and tip % with `prompt()`, converts them with `Number()`, and prints the tip and total. |
| 3 | Conditional Logic | Uses `if...else`, `switch` and a ternary operator to give a grade and a pass/fail status from a test score. |
| 4 | Loop Control Structures | Prints a multiplication table with `for`, finds the first number over 10 divisible by 6 with `while` and `break`, and uses `do...while` with `continue`. |
| 5 | Functions and Scope | Calculates rectangle area using a normal function and an arrow function with default parameters, and shows block scope with a `ReferenceError`. |
| 6 | Arrays, Objects, Methods | Uses an array of product objects with `forEach()`, `filter()` and `map()`. |

## Capstone Project: Interactive Product Inventory & Analytics Dashboard

A console-based JavaScript program that combines all the core concepts from the course in one application.

### Features
- Asks the user for a new product name and price with `prompt()` and converts the price using `Number()`.
- Adds the new product to an array of objects with the existing items (Laptop and Mouse).
- Checks the input with `if...else`. A loop with `continue` handles missing or invalid input, and `break` stops the loop once the input is valid.
- Assigns a category badge with a `switch` statement:
  - **Budget:** under $50
  - **Standard:** $50 to $499
  - **Premium:** $500 and above
- Uses a regular function to calculate the total inventory value, and an arrow function with default parameters to apply tax and discount.
- Uses `forEach()` to print the inventory, `filter()` to find items under $200, and `map()` to create a formatted report.

### Concepts Used
Variables, data types, operators, type conversion, conditionals, loops, functions, arrow functions, scope, arrays, objects, `forEach`, `filter`, `map`.

### How to Run
- **Browser:** open the console (F12), paste the code from `capstone.js`, press Enter, and enter a product name (e.g. `Monitor`) and price (e.g. `150`) in the pop-ups.
- **Node.js:** run `node capstone.js`. It uses sample answers automatically, because Node has no `prompt()`.
### Sample Output
```
--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","MONITOR: $150"]
```

## Technologies
- JavaScript (ES6)
