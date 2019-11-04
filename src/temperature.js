const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER;
const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));
const tempUp = temp.toUpperCase();
const scaleUp = scale.toUpperCase();

if (tempUp <= 32 && scaleUp == "F") {
  console.log("\nSolid.\n");
}
