const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const enter = Number(readlineSync.question("\nEnter a number: "));

if (enter < MIN || enter > MAX) {
    console.log("\nInvalid.\n");
}
else if (Number.isNaN(enter)) {
  console.log("\nInvalid.\n");
}
else if (enter > 0) {
  console.log("\nPositive.\n");
}
else if (enter < 0) {
  console.log("\nNegative.\n");
}
else {
  console.log("\nZero.\n");
}
