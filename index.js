const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
function start() {
  addManager();
}

function addManager() {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "Enter the team manager's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the manager's employee ID:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the manager's email address:",
    },
    {
      name: "officeNumber",
      type: "input",
      message: "Enter the manager's office number",
    } 
  ];
  inquirer.prompt(questions)
      .then((answers) => {
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.officeNumber));
        teamMembers.push(manager);
        mainMenu();
        })
      .catch((error) => {
        console.log(error);
      });
  }

function mainMenu () {
  const question = [
    {
      name: "nextAction",
      type:  "list",
      message: "What would you like to do next?",
      choices: ["Add an engineer", "Add an intern","Finish building my team"]
    }
  ]
  inquirer.prompt(question)
    .then((answers) => {
        if (answers.nextAction === "Add an engineer") {
          addEngineer();
        } else if (answers.nextAction === "Add an intern") {
          addIntern();
        } else if (answers.nextAction === "Finish building my team") {
          finishTeam();
        }
      }) 
    .catch((error) => {
      console.log(error);
    });
}

function addEngineer() {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "Enter the engineer's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the engineer's employee ID:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the engineer's email address:",
    },
    {
      name: "github",
      type: "input",
      message: "Enter the engineer's GitHub username:",
    } 
  ];
  inquirer.prompt(questions)
      .then((answers) => {
        const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
        teamMembers.push(engineer);
        mainMenu();
        })
      .catch((error) => {
        console.log(error);
      });
  }

function addIntern() {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "Enter the intern's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the intern's employee ID:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter the intern's email address:",
    },
    {
      name: "school",
      type: "input",
      message: "Enter the intern's school:",
    } 
  ];
  inquirer.prompt(questions)
      .then((answers) => {
        const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
        teamMembers.push(intern);
        mainMenu();
        })
      .catch((error) => {
        console.log(error);
      });
  }

function finishTeam() {
  fs.writeFile('./output/team.html', render(teamMembers), function (err) {
    if (err) throw err;
    console.log('The file has been created!');
  });
}

start();