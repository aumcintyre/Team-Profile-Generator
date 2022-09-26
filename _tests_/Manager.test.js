const Employee = require("../lib/Employee")


//Employee constructor functions properly
describe("Employee", () => {
    it('Creates a new object withiin the Employee constructor', () => {
        const employee = new Employee('Austin', 1, 'aumcintyre@gmail.com');
        
        expect(employee.name).toEqual(expect.any(String))
        expect(employee.id).toEqual(expect.any(Number))
        expect(employee.email).toEqual(expect.any(String))
    })
})