#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\Assalmu Alikum Wr! Welcome to CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please enter your guess number from 1 to 5",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("MashaAllah!!! you guess a correct number.");
}
else {
    console.log("Oops!!! you guess a wrong number");
}
