// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'instruction',
        message: 'Enter the information on how to use this project:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter the test instructions:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Enter project license:',
        choices: [
            'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 'The MIT License', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'Apache 2.0 License', ''
        ],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please list instructions for those who wish to contact you.',
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    
    const filename = "./generatedREADME/README.md";

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + "Success!")
    });
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
