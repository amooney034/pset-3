const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const enter = Number(readlineSync.question("\nEnter a number: "));

if (enter < MIN || enter > MAX) {
    console.log("\nInvalid.");
}
  else if (enter > 0) {
    console.log("\nPositive.");
}
else if (enter < 0) {
  console.log("\nNegative.");
}
else {
    console.log("\nZero.");
}
