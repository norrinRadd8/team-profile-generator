const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const alice = new Manager('Alice', '1', 'test@test.com')

// alice.getName()
// alice.getId()
// alice.getEmail()
function prompts() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the team manager's name?",
            validate: (user_input) => {
                if(!user_input.length) return 'You must enter at least one character.'
                return true
            }

        },
        {
            name: "id",
            message: "What is the team manager's id?"
        }, 
        {
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
        {
            name: "teamMemberType",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to enter any more team members"],
            type: "list"
        }

    ]) .then(data => {
        console.log(data)
    })


}

prompts()