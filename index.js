// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {   
        name:"file",
        type:"input",
        message:"What would you like your readMe file to be called?"
    },
    {
        name: "title",
        type:"input",
        message:"What is the title of your application? Enter nothing if you do not want this section."
    },
    {
        name:"description",
        type:"input",
        message:"Provide a description of your app. Enter nothing if you do not want this section."
    },
    {
        name:"installation",
        type:"input",
        message:"How do you install your app? Enter nothing if you do not want this section."
    },
    {
        name:"usage",
        type:"input",
        message:"How do you use your app? Enter nothing if you do not want this section."
    },
    {
        name: "contribution",
        type:"input",
        message:"How can you contribute to the app? Enter nothing if you do not want this section."
    },
    {   
        name: "issues",
        type:"input",
        message: "How can you report issues? Enter nothing if you do not want this section."
    },
    {
        name: "test",
        type:"input",
        message:"What tests does you application have? Enter nothing if you do not want this section."
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
    },
    {
        name:"github",
        type:"input",
        message:"Please enter your github username."
    },
    {
        name:"email",
        type:"input",
        message:"Please enter you email."
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data.license);
    let badge = generate.renderLicenseBadge(data.license);
    console.log(badge);
    let licenseSection = generate.renderLicenseSection(data.license);
    console.log(licenseSection);
    const markdown = generate.generateMarkdown(data);
    fs.writeFile(`${data.file}.md`,
    `# ${data.title}
${badge}

## Table of Contents
${markdown[0]}
${markdown[1]}
${markdown[2]}
${markdown[3]}
${markdown[4]}
${markdown[5]}

${markdown[6]}
${data.description}

${markdown[7]}
${data.installation}

${markdown[8]}
${data.usage}

${markdown[9]}
${data.contribution}

${markdown[10]}
${data.test}

## Questions
Github : https://github.com/${data.github}
Email : ${data.email}

${licenseSection}

    `, err => {
        if(err){console.log("There was an error")}
        console.log("File was created successfully!")
    } )

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response=>{
        writeToFile(response)
    });
}

// Function call to initialize app
init();
