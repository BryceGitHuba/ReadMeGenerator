const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What's the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Provide a brief description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "install"
  },
  {
    type: "input",
    message: "How do you use your project?",
    name: "usage"
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: ["MIT", "ISC", "IBM"],
    name: "license"
  },
  {
    type: "input",
    message: "Who are the contributors to this project?",
    name: "contributors"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests"
  },
  {
    type: "input",
    message: "What's your GitHub username?",
    name: "githubUsername"
  },
  {
    type: "input",
    message: "What's your email address?",
    name: "email"
  },
  // ... Add other questions as needed
];

// Use inquirer.prompt instead of createPromptModule
inquirer
  .prompt(questions)
  .then((answers) => {
    // Use generateMarkdown instead of getMarkdown
    const markdown = generateMarkdown(answers);
    fs.writeFile('README.md', markdown, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Write file success!");
      }
    });
  });