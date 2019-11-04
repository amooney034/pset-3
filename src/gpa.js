const readlineSync = require("readline-sync");

const enter = readlineSync.question("\nEnter a letter grade: ");

if ((enter == "a+" || enter == "A+")) {
  console.log("\nYour GPA is 4.00.\n");
}
else if ((enter == "a") || (enter == "A")) {
  console.log("\nYour GPA is 4.00.\n");
}
else if (enter == "a-" || enter == "A-") {
  console.log("\nYour GPA is 3.67.\n");
}
else if (enter == "b+" || enter == "B+") {
  console.log("\nYour GPA is 3.33.\n");
}
else if ( enter == "b" || enter == "B") {
  console.log("\nYour GPA is 3.00.\n");
}
else if (enter == "b-" || enter == "B-") {
  console.log("\nYour GPA is 2.67.\n");
}
else if (enter == "c+" || enter == "C+") {
  console.log("\nYour GPA is 2.33.\n");
}
else if ( enter == "c" || enter == "C") {
  console.log("\nYour GPA is 2.00.\n");
}
else if (enter == "c-" || enter == "C-") {
  console.log("\nYour GPA is 1.67\n");
}
else if (enter == "d+" || enter == "D+") {
  console.log("\nYour GPA is 1.33.");
}
else if ( enter == "d" || enter == "D") {
  console.log("\nYour GPA is 1.00.\n");
}
else if (enter == "d-" || enter == "D-") {
  console.log("\nYour GPA is 0.67\n");
}
else if ( enter == "f" || enter == "F") {
  console.log("\nYour GPA is 0.00.\n");
}
else {
  console.log("\nInvalid.");
}
