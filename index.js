// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type:"input",
        message:"What is the title of your application? Type N if you do not want to include a title."
    },
    {
        name:"description",
        type:"input",
        message:"Provide a description of your app. Type N if you do not want to include a description."
    },
    {
        name:"installation",
        type:"input",
        message:"How do you install your app? Type N if you do not want to include installation details."
    },
    {
        name:"usage",
        type:"input",
        message:"How do you use your app? Type N if you do not want to include usage details."
    },
    {
        name: "contribution",
        type:"input",
        message:"How can you contribute to the app? Type N if you do not want to include contribution details."
    },
    {   
        name: "issues",
        type:"input",
        message: "How can you report issues? Type N if you do not want to include details on reporting issues."
    },
    {
        name: "test",
        type:"input",
        message:"What tests does you application have? Type N if you do not want to include details on testing."
    },
    {
        name: "license",
        type: "rawlist",
        message: "Which license does your app have?",
        choices: 
        ["No License",
        "Apache license 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        "BSD 2-clause 'Simplified' license",
        "BSD 3-clause 'New' or 'Revised license",
        "Creative Commons Zero v1.0 Universal",
        "Creative Commons Attribution 4.0",
        "Creative Commons Attribution ShareAlike 4.0",
        "Do What The F*ck You Want To Public License",
        "Eclipse Public License 1.0",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0",
        "GNU Lesser General Public License v3.0",
        "IBM Public License v1.0",
        "ISC",
        "MIT",
        "Mozilla Public License 2.0",
        "Perl License",
        "PostgreSQL License",
        "SIL Open Font License 1.1",
        "The Unlicense",
        "zLib License"    ]
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    generate.renderLicenseBadge(data.license);
    generate.renderLicenseSection(data.license);
    generate.generateMarkdown(data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response=>{
        writeToFile(response)
    });
}

// Function call to initialize app
init();
