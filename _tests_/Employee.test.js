const Employee = require("../lib/Employee")


//Employee constructor functions properly
describe("Employee", () => {
    it('Creates a new object withiin the Employee constructor', () => {
        const employee = new Employee('Austin', 1, 'aumcintyre@gmail.com');
        
        expect(employee.name).toEqual(expect.any(String))
        expect(employee.id).toEqual(expect.any(Number))
        expect(employee.email).toEqual(expect.any(String))
    })

//getName() functions properly

    it('Pulls the employee name', () => {
        const employee = new Employee('Austin', 1, 'aumcintyre@gmail.com');

        expect(employee.getName()).toEqual(expect.any(String));
    });

//getID() functions properly
    it('Gets employee ID value', () => {
        const employee = new Employee('Austin', 1, 'aumcintyre@gmail.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    });

//getRole() functions properly
    it('Gets employee role value', () => {
        const employee = new Employee('Austin', 1, 'aumcintyre@gmail.com');

        expect(employee.getRole()).toEqual("Employee");
    })

//getEmail() functions properly
it('Gets employee email value', () => {
    const employee = new Employee('Austin', 1, 'aumcintyre@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
})    
});