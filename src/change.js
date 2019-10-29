const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quarters = .25
const dimes = .10
const nickels = .05
const pennies = .01
const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    "Invalid."
} else if (amount < MIN || amount > MAX) {
    // print your error message here
} else {
    // write your code for making change here
}

console.log("\n quarters, " + " dimes, " + " nickels, and " + "pennies." );
