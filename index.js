//Link to generate page here

//Employee Classes
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

//Node Modules
const fs = require('fs');
const inquirer = require('inquirer');

//Team array starts blank, will have values pushed based on user-input
const teamArray = [];

//Manager prompts begin here

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',

        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number."
        },
    ])
}

addManager()
//Employee prompts begin here