//Link to generate page here
const generateHTML = require('./src/generateHTML')

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
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
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



            if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            } else if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
            }
            teamArray.push(employee);
            console.log(employee);
            console.log(teamArray);

            if (confirmAdd) {
                return newEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

}

//Call functions and write to index below

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Profile created.");
        }
    }
    )
}


addManager()
    .then(newEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })

