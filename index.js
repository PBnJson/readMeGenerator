const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");
const questions = [{
        name: "title",
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: "description",
        type: "input",
        message: "What is the description of your project?",
    },
    {
        name: "license",
        type: "list",
        message: "What type of license does your project use?",
        choices: ["MIT", "Apache2.0", "Mozilla", "None"],
    },
    {
        name: "installation",
        type: "input",
        message: "What is the installation command?",
    },
    {
        name: "username",
        type: "input",
        message: "What is your GitHub username?",
    },
    {
        name: "projectRepo",
        type: "input",
        message: "What is the name of your repo?",
    },
    {
        name: "usage",
        type: "input",
        message: "What is this project used for?",
    },
    {
        name: "contribution",
        type: "input",
        message: "Who were the contributors?",
    },
    {
        name: "testing",
        type: "input",
        message: "What kind of testing was done on the project?", //we can run tests for stings/integers, etc.
    },
    {
        name: "registration",
        type: "input",
        message: "What is your email address?",
    },
];

//get the info from the user, use the info to generate a markdown(.md extention i.e. makeareadme.com) string, use the markdown string to make the file.

function createFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", (err) => {
        if (err) throw err;
        console.log("File Created!");
    });
}
//asks the questions for the README
//I could have added the questions on the .prompt instead of making an array, but the array looks cleaner.  The array is the argument to the .prompt method.  .then sets the answers to the questions in the array and calls the functions generateMarkdown and createFile. for .prompt([{add questions here}])  JSON.stringify(answers, null, 2)
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("line 18 answers, ", answers);
            const markdownString = generateMarkdown(answers);
            console.log("markdown string, ", markdownString);
            createFile("README.md", markdownString);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("error");
            } else {
                // Something else went wrong
            }
        });
}
init();