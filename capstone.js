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
