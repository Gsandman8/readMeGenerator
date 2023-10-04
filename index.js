// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        {type: "list",
        name: "whatever",
        choices: ["hey","whats up"]}
    )
}

// Function call to initialize app
init();
