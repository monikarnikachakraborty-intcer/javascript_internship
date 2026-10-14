# javascript_internship
project and assignments on javascript


Assignment 1: Variables, Data Types, and Console Operations

Task: Declare variables using var, let, and const to store a user's name, age, employment status, and a list of skills. Use typeof to check each variable's type and log them to the console.

var name = "Alice";
let age = 25;
const isEmployed = true;
let skills = ["HTML", "CSS", "JavaScript"];

console.log("Name:", name);
console.log("Type:", typeof name);

console.log("Age:", age);
console.log("Type:", typeof age);

console.log("Is Employed:", isEmployed);
console.log("Type:", typeof isEmployed);

console.log("Skills:", skills);
console.log("Type:", typeof skills);



Assignment 2: Operators, Expressions, and Input Handling

Task: Use prompt() to capture a user's bill amount and tip percentage. Perform explicit type conversion (e.g., using Number()), compute the total using arithmetic and assignment operators, and log a formatted string.

let bill = prompt("Enter your bill amount:");
let tipPercent = prompt("Enter tip percentage:");

bill = Number(bill);
tipPercent = Number(tipPercent);

let tip = (bill * tipPercent) / 100;
let total = bill + tip;

console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercent + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);



Assignment 3: Conditional Logic Implementation

Task: Create a script that evaluates a user's numerical test score using if...else statements, determines a letter grade using a switch statement, and uses a ternary operator to print whether they passed or failed.

let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

switch (grade) {
    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Good");
        break;

    case "C":
        console.log("Average");
        break;

    default:
        console.log("Needs Improvement");
}

let status = score >= 40 ? "Passed" : "Failed";

console.log("Score:", score);
console.log("Grade:", grade);
console.log("Status:", status);


Assignment 4: Loop Control Structures

Task: Write a for loop to print a multiplication table up to 5. Use a while loop with a break statement to find the first number greater than 10 that is divisible by 6, and a do...while loop that skips numbers using continue.

// Multiplication table
console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// While loop
console.log("-- First number > 10 divisible by 6 --");

let number = 11;

while (number <= 20) {

    if (number > 10 && number % 6 == 0) {
        console.log("Found:", number);
        break;
    }

    number++;
}


// Do while loop
console.log("-- Do While Example --");

let i = 0;

do {
    i++;

    if (i == 3) {
        continue;
    }

    console.log(i);

} while (i < 5);


Assignment 5: Function Architecture and Scope

Task: Define a standard function and an arrow function that accept parameters (e.g., length and width) with default values to calculate the area of a rectangle. Demonstrate function and block scope limits.

// Normal function
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

console.log("Standard Function Area (Default 5x4):", rectangleArea());


// Arrow function
const area = (length, width) => {
    return length * width;
};

console.log("Arrow Function Area (Custom 10x3):", area(10, 3));


// Scope example
{
    let blockVar = "Hello";
    console.log("Inside block:", blockVar);
}

// blockVar cannot be used here




Assignment 6: Arrays, Objects, and Core Methods

Task: Create an array of product objects (with name and price properties). Use forEach() to print each product, filter() to find items under a certain price, and map() to create an array of formatted name-price strings.

let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];


// forEach
console.log("-- All Products (forEach) --");

products.forEach(function(product) {
    console.log("Item: " + product.name + " - Price: $" + product.price);
});


// filter
console.log("-- Filtered Products (Price < $50) --");

let cheapProducts = products.filter(function(product) {
    return product.price < 50;
});

console.log(cheapProducts);


// map
console.log("-- Mapped Product Tags (map) --");

let productTags = products.map(function(product) {
    return product.name.toUpperCase() + " costs $" + product.price;
});

console.log(productTags);





// Capstone Project: Interactive Product Inventory & Analytics Dashboard
// Works in a browser console (uses prompt) and in Node (uses a sample answer).

// ---------- Step 1: Data & Input ----------
console.log("--- Initializing Inventory System ---");

var inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

// In Node there is no prompt(), so we make a simple stand-in.
// Order of fake answers: name, then price.
if (typeof prompt === "undefined") {
  var fakeAnswers = ["Monitor", "150"];
  var fakeIndex = 0;
  var prompt = function () {
    var answer = fakeAnswers[fakeIndex];
    fakeIndex++;
    return answer;
  };
}

var newName = "";
var newPrice = 0;

// Loop: keep asking until the input is good (max 3 tries)
for (var attempt = 1; attempt <= 3; attempt++) {
  var nameInput = prompt("Enter the new product name:");
  var priceInput = prompt("Enter the product price:");

  // continue = skip bad input and try again
  if (nameInput === null || nameInput === undefined || nameInput.trim() === "") {
    console.log("Missing name, try again.");
    continue;
  }

  var priceNumber = Number(priceInput); // explicit type conversion
  if (isNaN(priceNumber) || priceNumber <= 0) {
    console.log("Invalid price, try again.");
    continue;
  }

  newName = nameInput.trim();
  newPrice = priceNumber;
  break; // good input, stop the loop
}

if (newName !== "") {
  inventory.push({ name: newName, price: newPrice });
  console.log('[Prompt executed: User adds "' + newName + '" at "$' + newPrice + '"]');
} else {
  console.log("No valid product added.");
}

// ---------- Step 2: Conditionals (if/else + switch) ----------
function getCategory(price) {
  var level;
  if (price < 50) {
    level = "low";
  } else if (price < 500) {
    level = "middle";
  } else {
    level = "high";
  }

  var badge;
  switch (level) {
    case "low":
      badge = "Budget";
      break;
    case "middle":
      badge = "Standard";
      break;
    case "high":
      badge = "Premium";
      break;
    default:
      badge = "Unknown";
  }
  return badge;
}

// ---------- Step 3: Loop with break (search) ----------
function findProduct(searchName) {
  var found = null;
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === searchName.toLowerCase()) {
      found = inventory[i];
      break; // stop once we find it
    }
  }
  return found;
}

// ---------- Step 4: Functions & Scope ----------
// Regular function
function getTotalValue(items) {
  var total = 0; // local variable, only lives inside this function
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price;
  }
  return total;
}

// Arrow function with default tax and discount
const applyTaxAndDiscount = (price, tax = 0, discount = 0) => {
  const withTax = price + price * tax;
  return withTax - withTax * discount;
};

// ---------- Step 5: Array methods ----------
console.log("\n--- Processing Inventory Roster (forEach) ---");
inventory.forEach(function (item) {
  console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + getCategory(item.price));
});

console.log("\n--- Financial Analytics ---");
console.log("Total Inventory Value: $" + getTotalValue(inventory));

var affordable = inventory
  .filter(function (item) { return item.price < 200; })
  .map(function (item) { return item.name; });
console.log("Filtered Affordable Items (Under $200): " + JSON.stringify(affordable));

var report = inventory.map(function (item) {
  return item.name.toUpperCase() + ": $" + item.price;
});
console.log("Formatted Report List: " + JSON.stringify(report));

// Extra demos of search and tax/discount
var result = findProduct("mouse");
if (result !== null) {
  console.log("\nSearch found: " + result.name);
  console.log("Mouse with 10% tax and 5% discount: $" + applyTaxAndDiscount(result.price, 0.1, 0.05).toFixed(2));
}
