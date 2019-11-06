const readlineSync = require("readline-sync");

const month = String(readlineSync.question("\nEnter a month: "));
const enter = month.toLowerCase();

if (enter == "feb") {
  console.log("\n28 or 29 days.\n");
}
else if (enter == "jan") {
  console.log("\n31 days.\n");
}
else if (enter == "mar") {
  console.log("\n31 days.\n");
}
else if (enter == "apr") {
  console.log("\n30 days.\n");
}
else if (enter == "may") {
  console.log("\n31 days.\n");
}
else if (enter == "jun") {
  console.log("\n30 days.\n");
}
else if (enter == "jul") {
  console.log("\n31 days.\n");
}
else if (enter == "aug") {
  console.log("\n31 days.\n");
}
else if (enter == "sep") {
  console.log("\n30 days.\n");
}
else if (enter == "oct") {
  console.log("\n31 days.\n");
}
else if (enter == "nov") {
  console.log("\n30 days.\n");
}
else if (enter == "dec") {
  console.log("\n31 days.\n");
}
else {
  console.log("\nInvalid.\n");
}
