//Link to generate page here

//Employee Classes
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

//Node Modules
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');

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
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            // Won't work until Manager constructor is built out -- NOW WORKING
            teamArray.push(manager);
            console.log(manager);
            console.log(teamArray);
        })
}


//Employee prompts begin here

const newEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select employee role.',
            choices: ['Intern', 'Engineer'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email adress.',
        },
//This question prompts only if 'Engineer' is selected as the role.
        {
            type: 'input',
            name: 'github',
            message: 'Enter employee Github Username.',
            when: (input) => input.role === "Engineer",
        },
//This question prompts only if 'Intern' is slected at the role.
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school name.',
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Do you want to add another employee?',
        },
    ])
    .then(employeeInput => {
        let { name, id, email, role, github, school, confirmAdd } = employeeInput;
        let employee;

//Need to build out the Intern and Engineer classes for this portion
    
        if(role === "Intern"){
            employee = new Intern (name, id, email, school);
        } else if (role === "Engineer"){
            employee = new Engineer (name, id, email, github);
        }
        teamArray.push(employee);


        if(confirmAdd){
            return newEmployee(teamArray);
        }else {
            return teamArray;
        }
    })
}

//Call functions and write to index below
addManager()
.then(newEmployee)