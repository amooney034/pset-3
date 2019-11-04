const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;
const enter = Number(readlineSync.question("\nEnter a grade: "));

if (enter < MIN || enter > MAX) {
  console.log("\nInvalid.\n");
}
else if (enter < 101 && enter > 89) {
  console.log("\nYou received a(n) A.\n");
}
else if (enter < 90 && enter > 79) {
  console.log("\nYou received a(n) B.\n");
}
else if (enter < 80 && enter > 69) {
  console.log("\nYou received a(n) C.\n");
}
else if (enter < 70 && enter > 59) {
  console.log("\nYou received a(n) D.\n");
}
else if (enter < 60 && enter >= 0) {
  console.log("\nYou received a(n) F.\n");
}
else {
  console.log("\nInvalid.\n");
}
