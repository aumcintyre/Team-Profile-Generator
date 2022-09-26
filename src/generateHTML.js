//Using template literals from HTML Template to generate employee cards

const generateManager = function (manager){
return `
<div class="col-4 mt-5">
    <div class = "h-125 card">

        <div class="card-header">
            <h1>
                ${manager.name}
            </h1>
            <h2>
                Role: 'Manager'
            </h2>
        </div>

        <div class="card-body">
            <p> ID: ${manager.id} </p>
            <p> EMAIL: <a href="mailtio:${manager.email}> ${manager.email}</a> </p>
            <p> OFFICE: ${manager.officeNumber} </p>
        </div>

    </div>
</div>
`
}

const generateIntern = function(intern) {
    return `
    <div class="col-4 mt-5">
    <div class = "h-125 card">

        <div class="card-header">
            <h1>
               ${intern.name}
            </h1>
            <h2>
                Role: 'Intern'
            </h2>
        </div>

        <div class="card-body">
            <p> ID: ${intern.id} </p>
            <p> EMAIL: <a href="mailtio:${intern.email}> ${intern.email}</a> </p>
            <p> SCHOOL: ${intern.school} </p>
        </div>

    </div>
</div>
    `
}

const generateEngineer = function(engineer) {
    return `
    <div class="col-4 mt-5">
    <div class = "h-125 card">

        <div class="card-header">
            <h1>
               ${engineer.name}
            </h1>
            <h2>
                Role: 'Intern'
            </h2>
        </div>

        <div class="card-body">
            <p> ID: ${engineer.id} </p>
            <p> EMAIL: <a href="mailtio:${engineer.email}> ${engineer.email}</a> </p>
            <p> GITHUB: ${engineer.github} </p>
        </div>

    </div>
</div>
`
}

generateHTML = (data) => {
    profileArray = [];

    for(let i=0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager"){
            const managerCard = generateManager(employee);
            profileArray.push(managerCard);

        }

        if (role === "Intern"){
            const internCard = generateIntern(employee);
            profileArray.push(internCard);
        }

        if (role === "Engineer"){
            const engineerCard = generateEngineer(employee);
            profileArray.push(engineerCard);
        }
    }

    const employeeCards = profileArray.join('');

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

// generateEmployeeProfiles = function (employeeCards)