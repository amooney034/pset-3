const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const enter = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isInteger(enter % 2 === 0)) {
  console.log("\nEven.\n");
}
else if (enter < MIN || enter > MAX) {
  console.log("\nInvalid.\n");
}
  else (Number.isInteger(enter  {
    console.log("\nOdd.\n");
  }
