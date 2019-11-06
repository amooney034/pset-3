const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const amountQuarter = 0.25;
const amountDime = 0.10;
const amountNickel = 0.05;
const amountPenny = 0.01;
const enter = Number(readlineSync.question("\nEnter a dollar amount: "));

let quarter = Math.floor(enter/amountQuarter);
let finalQuarter = enter-(quarter)*(amountQuarter);
let dime = Math.floor(finalQuarter/amountDime);
let finalDime = finalQuarter-(dime)*(amountDime);
let nickel = Math.floor(finalDime/amountNickel);
let finalNickel = finalDime-(nickel)*(amountNickel);
let penny = Math.round(finalNickel/amountPenny);


if (Number.isNaN(enter)) {
    console.log("\nInvalid\n")
}
else if (enter < MIN || enter > MAX) {
    console.log("\nInvalid\n")
}
else {
    console.log("\n" + quarter + " quarters, " + dime + " dimes, " + nickel + " nickels" + ", and " + penny + " pennies.\n")
}
