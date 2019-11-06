const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const enter = Number(readlineSync.question("\nEnter a year: "));


if (enter < MIN || enter > MAX) {
  console.log("\nInvalid.\n");
}
else if (enter % 4 === 0 && enter % 100 !== 0 || enter % 400 === 0) {
  console.log("\n" + enter + " is a leap year.\n");
}
else if (Number.isNaN(enter)) {
  console.log("\nInvalid.\n");
}
else if (!(Number.isInteger(enter))) {
  console.log("\nInvalid.\n");
}
else {
  console.log("\n" + enter + " is not a leap year.\n");
}
