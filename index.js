const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

const teamData = []

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const alice = new Manager('Alice', '1', 'test@test.com')

// alice.getName()
// alice.getId()
// alice.getEmail()

function managerPrompts() {
   return inquirer.prompt([
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
        }
    ]) .then((answers) => {
        teamData.push({
            type: 'manager',
            data: answers
        })

    })
}

function engineerPrompts() {
    return inquirer.prompt([
        {
           name: "name", 
           message: "What is the engineer's name?",
           validate: (user_input) => {
            if(!user_input.length) return 'You must enter at least one character.'
            return true
            }
        },
        {
            name: "id",
            message: "What is the engineer's id?"
        },
        {
            name: "email",
            message: "What is the engineer's email?"

        },
        {
            name: "gitHub",
            message: "What is the engineer's GitHub username?"
        },
    ]) .then((answers) => {
        teamData.push({
            type: 'engineer',
            data: answers
        })
    })
    
}

function internPrompts() {
     return inquirer.prompt([
        {
           name: "name", 
           message: "What is the intern's name?",
           validate: (user_input) => {
            if(!user_input.length) return 'You must enter at least one character.'
            return true
            }
        },
        {
            name: "id",
            message: "What is the intern's id?"
        },
        {
            name: "email",
            message: "What is the intern's email?"
        },
        {
            name: "school",
            message: "What is the intern's school?"
        },
        
    ]) .then((answers) => {
        teamData.push({
            type: 'intern',
            data: answers
        })
    }) 

}

function prompts() {
    return inquirer.prompt([
        {
            name: "teamMemberType",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Exit"],
            type: "list"
        },
    ]).then(answers => {
        if(answers.teamMemberType === "Engineer") {
            return engineerPrompts()
                .then(prompts)
        }
        else if(answers.teamMemberType === "Intern") {
            return internPrompts()
                .then(prompts)
        }
        console.log('Thank you for your update(s). Goodbye!')
        console.log(teamData)
        process.exit()
    })
}

function init() {
    console.log('----- Welcome to the Team Profile Generator -----')
    managerPrompts()
    .then(prompts)
    
}
init()

