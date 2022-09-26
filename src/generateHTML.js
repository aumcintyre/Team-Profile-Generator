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
            <p> EMAIL: <a href="mailtio:${manager.email}"> ${manager.email}</a> </p>
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
            <p> EMAIL: <a href="mailtio:${intern.email}"> ${intern.email}</a> </p>
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
            <p> EMAIL: <a href="mailtio:${engineer.email}"> ${engineer.email}</a> </p>
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

    const generateProfiles= generateEmployeeProfiles(employeeCards);
    return generateProfiles;
}

generateEmployeeProfiles = function (employeeCards){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/dist/style.css">
</head>
<body>
    
<header>
<nav class="">
    <span class="">Employee Profiles</span>
</nav>

</header>

<main>
    <div class="container">
    <div class="row justify-content-center">

    ${employeeCards}

</div>
</div>
</main>


</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
    `
}

module.exports = generateHTML;