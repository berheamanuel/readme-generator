# Professional README Generator 
## Description
This command-line application dynamically generates a professional README.md file from a user's input using the Inquirer package

## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

* GIVEN a command-line application that accepts user input
* WHEN I am prompted for information about my application repository
* THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
* WHEN I enter my project title
* THEN this is displayed as the title of the README
* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
* THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
* WHEN I choose a license for my application from a list of options
* THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
* WHEN I enter my GitHub username
* THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
* WHEN I enter my email address
* THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
* WHEN I click on the links in the Table of Contents
* THEN I am taken to the corresponding section of the README

## Demonstration
* https://drive.google.com/file/d/1KPhC-yzN0AqjqrdzhEy138lXua4vBDg5/view
![Alt text](image.png)

## Installation

* Before attempting to use this project, make sure to have these programs installed on your computer:
VS Code
GitBash
Node.js
* Steps to initialize the project:
1. Copy Link: Hit the "Code" button within this GitHub repo to copy link
2. Clone: Within GitBash, use the command "git clone paste link here"
3. npm: Use the command "npm init -y" to install Node Package Manager
4. Inquirer: Use the command "npm install inquirer" to get npm's inquirer package

## Usage

Once software is downloaded and Node packages are initialized, it's time to get started!

Within the directory for this project, initialize prompts using the command "node index.js".

From there, simply enter the necessary information for your project, and voila! A new README file will be generated and placed into the 'dist' folder.


## Referrence
* https://stackoverflow.com/questions/67013842/trying-to-place-license-badge-within-readme-md-using-node-js-but-getting-error-a
* https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


## License
* MIT License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


