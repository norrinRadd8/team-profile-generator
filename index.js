// GLOBAL VARIABLES

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamData = []

// FUNCTIONS FOR APP QUESTION PROMPTS

// Prompts user for manager details
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
    // PUSHING USERS RESPONSE FROM NEW OBJECTS TO THE TEAMDATA ARRAY 
    ]) .then((answers) => { 
        teamData.push(
            new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            )

    })
}

// Prompts user for engineer details
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
        }
    // PUSHING USERS RESPONSE FROM NEW OBJECTS TO THE TEAMDATA ARRAY 
    ]) .then((answers) => {
        teamData.push(
            new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
            )
    })
    
}

// Prompts user for Intern details
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
        }
    // PUSHING USERS RESPONSE FROM NEW OBJECTS TO THE TEAMDATA ARRAY    
    ]) .then((answers) => {
        teamData.push(
            new Intern(answers.name, answers.id, answers.email, answers.school)
            )
    }) 

}

// Prompts user for the option for additional team members
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
        // SUMMARY LOGS AND EXIT MESSAGE
        console.log('This is you team data :- ')
        console.log(teamData)
        console.log('Thank you for your update(s). Your page has now been rendered to the output directory. \n Have a good day!')
        buildPage()
        process.exit()
        
        
    })
}

// RENDER TEAM.HTML PAGE TO DIRECTORY
function buildPage() {
    fs.writeFileSync(outputPath, render(teamData), "utf-8")
}

// INITIALISE APP WITH WELCOME MESSAGE
function init() {
    console.log('\n----- Welcome to the Team Profile Generator -----\n')
    managerPrompts()
    .then(prompts)
    
}
init()

