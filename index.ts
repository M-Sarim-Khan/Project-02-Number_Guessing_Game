#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold("Welcome to my Number Guessing Game"));
const guess = await inquirer.prompt([
    {name: "userNumber", message: "Guess your number between 1 and 5: ", type: "number"},
]);

const compNmber = Math.floor(Math.random() * 5 + 1);

if (guess.userNumber === compNmber) { 
    console.log(chalk.green("\nCongragulations! You have guessed the right number."));
} else {
    console.log(chalk.red("\nSorry! You have guessed the wrong nmber."));
};