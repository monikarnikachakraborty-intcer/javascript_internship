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

A small program that combines all the core concepts in one place.

### Features
- Asks the user for a new product name and price with `prompt()` and converts the price with `Number()`.
- Checks the input with `if...else`; a loop with `continue` asks again if the input is missing or invalid.
- Gives each product a category using a `switch` statement:
  - **Budget:** under $50
  - **Standard:** $50 to $499
  - **Premium:** $500 and above
- Uses a regular function to get the total inventory value and an arrow function (with default parameters) for tax and discount.
- Uses `forEach()` to print the inventory, `filter()` to find items under $200, and `map()` to build a formatted report.

### Concepts Used
Variables and data types, operators, type conversion, `if...else`, `switch`, loops with `break` and `continue`, functions, arrow functions, scope, arrays, objects, `forEach`, `filter`, `map`.

### How to Run
1. Download `capstone.html`.
2. Double-click it to open it in Chrome or Edge.
3. When the pop-ups appear, enter a product name (e.g. `Monitor`) and a price (e.g. `150`, no `$` sign).
4. The output shows on the page and in the browser console (press F12).

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
