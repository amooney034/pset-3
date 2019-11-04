const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const enter = Number(readlineSync.question("\nEnter an integer: "));

if (enter < MIN || enter > MAX) {
  console.log("\nInvalid.");
}
else if (enter % 2 === 0) {
  console.log("\nEven.\n");
}
else if (Number.isNaN(enter)) {
  console.log("\nInvalid.\n");
}
else if (!(Number.isInteger(enter))) {
  console.log("\nInvalid.\n");
}
else {
  console.log("\nOdd.\n");
}
