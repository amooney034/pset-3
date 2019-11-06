const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER;
const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));
const scaleUp = scale.toUpperCase()

if (temp <= 32 && scaleUp == "F") {
  console.log("\nSolid.\n");
}
else if ((temp > 32 && temp < 212) && scaleUp == "F") {
  console.log("\nLiquid.\n");
}
else if (temp >= 212 && scaleUp == "F") {
  console.log("\nGas.\n");
}
else if (temp <= 0 && scaleUp == "C") {
  console.log("\nSolid.\n");
}
else if ((temp > 0 && temp < 100) && scaleUp == "C") {
  console.log("\nLiquid.\n");
}
else if (temp >= 100 && scaleUp == "C") {
  console.log("\nGas.\n");
}
else if (temp <= 273.15 && scaleUp == "K") {
  console.log("\nSolid.\n");
}
else if ((temp > 273.15 && temp < 373.15) && scaleUp == "K") {
  console.log("\nLiquid.\n");
}
else if (temp >= 373.15 && scaleUp == "K") {
  console.log("\nGas.\n");
}
else {
  console.log("\nInvalid.\n");
}
