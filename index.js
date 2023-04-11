const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Hi there! To get started, first give me the title of your repo.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Great! Can you give me a brief description of the project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If the product is already deployed, go ahead and give the URL here.',
        name: 'deployedURL',
    },
    {
        type: 'input',
        message: 'What instructions would you give to users to install the application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Next, tell them what they need to know in order to use the application',
        name: 'instructions',
    },
    {
        type: 'input',
        message: "If you've got a screenshot, provide the path to that here.",
        name: 'screenshotPath',
    },
    {
        type: 'input',
        message: "Let the users know how they can contribute to your project. Just type N/A if you don't want them contributing.",
        name: 'contributions',
    },
    {
        type: 'input',
        message: "Can you please give me your email address. That way users can reach out to you if needed.",
        name: 'contactInfo',
    },
    {
        type: 'input',
        message: "Give me your user name on GitHub.",
        name: 'gitName',
    },
    {
        type: 'list',
        message: "Almost done! Select which license this app is covered under.",
        name: 'license',
        choices: "'MIT', 'Boose Software 1.0', 'Creative Commons Zero v1.0 Universal', 'N/A'"
    },
]

function createFile(data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log("Your README is done! Check your root folder for the file.")
)}

// Function call to initialize app

let init = function() {
    inquirer.prompt(questions)

    .then ((data) =>
      generateMarkdown(data),
      createFile('README.md', data)
    )
}

init()
