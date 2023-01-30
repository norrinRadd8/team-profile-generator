const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { type } = require("os");

const teamData = []

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function managerPrompts() {
   return inquirer.prompt([
        {
            name: "name",
            message: "What is the team manager's name?",
            validate: (user_input) => {
                if(!user_input.length) return 'You must enter at least one character.'
                return true
                
            },
            type: "input"
        },
        {
            name: "id",
            message: "What is the team manager's id?",
            type:"input"
        }, 
        {
            name: "email",
            message: "What is the team manager's email?",
            type:"input"
        },
        {
            name: "officeNumber",
            message: "What is the team manager's office number?",
            type:"input"
        }
    ]) .then((answers) => { 
        teamData.push(
            new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            )

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
            },
            type: "input"
        },
        {
            name: "id",
            message: "What is the engineer's id?",
            type: "input"
        },
        {
            name: "email",
            message: "What is the engineer's email?",
            type: "input"

        },
        {
            name: "gitHub",
            message: "What is the engineer's GitHub username?",
            type: "input"
        },
    ]) .then((answers) => {
        teamData.push(
            new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            )
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
            },
            type: "input"
        },
        {
            name: "id",
            message: "What is the intern's id?",
            type: "input"
        },
        {
            name: "email",
            message: "What is the intern's email?",
            type: "input"
        },
        {
            name: "school",
            message: "What is the intern's school?",
            type: "input"
        },
        
    ]) .then((answers) => {
        teamData.push(
            new Intern(answers.name, answers.id, answers.email, answers.school)
            )
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
        console.log('Thank you for your update(s). Your page has been created. Goodbye!')
        console.log(teamData)
        buildPage()
        process.exit()
        
        
    })
}

function buildPage() {
    fs.writeFileSync(outputPath, render(teamData), "utf-8")
}

function init() {
    console.log('\n----- Welcome to the Team Profile Generator -----\n')
    managerPrompts()
    .then(prompts)
    
}
init()

