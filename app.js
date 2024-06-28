#! /usr/bin/env node
import inquirer from "inquirer";
//  1 Computer will generate a random number
//  2 user input for guessing number
//  3 compare user input with computer generated number and show result
console.log("Welcome to Guessing Number Game");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessednumber",
        type: "number",
        message: ("Please guess a number between 1-10:")
    },
]);
if (answer.userGuessednumber == randomNumber) {
    console.log("Congratulation you guessed right Number");
}
else {
    console.log("You guess wrong number");
}
