const readlineSync = require("readline-sync");

console.log("\nEnter three numbers. \n");
const firstNumber = Number(readlineSync.question("\n"));
const secondNumber = Number(readlineSync.question(""));
const thirdNumber = Number(readlineSync.question(""));

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber) || Number.isNaN(thirdNumber)) {
    console.log("\nInvalid.");
}
else if (firstNumber < Number.MIN_SAFE_INTEGER || firstNumber > Number.MAX_SAFE_INTEGER || secondNumber < Number.MIN_SAFE_INTEGER || secondNumber > Number.MAX_SAFE_INTEGER || thirdNumber < Number.MIN_SAFE_INTEGER || thirdNumber > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
}
else if (firstNumber<secondNumber && secondNumber<thirdNumber) {
      console.log("\nStrictly increasing.")
    }
    else if (firstNumber<=secondNumber && secondNumber<=thirdNumber) {
        console.log("\nIncreasing.")
      }
  else if (firstNumber==secondNumber && secondNumber==thirdNumber) {
      console.log("\nEqual.")
    }
    else if (firstNumber>=secondNumber && secondNumber>=thirdNumber) {
        console.log("\nDecreasing.")
      }
  else if (firstNumber>secondNumber && secondNumber>thirdNumber) {
      console.log("\nStrictly decreasing.")
    }
  else {
      console.log("\nUnordered.")
    }
