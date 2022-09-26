const Manager = require("../lib/Manager")


//Employee constructor functions properly
describe("Manager", () => {
    it('Creates a new object withiin the Manager constructor', () => {
        const manager = new Manager('Austin', 1, 'aumcintyre@gmail.com', 1);
        
        expect(manager.officeNumber).toEqual(expect.any(Number));
    })

    it('Gets employee role', () => {
        const manager = new Manager('Austin', 1, 'aumcintyre@gmail.com');

        expect(manager.getRole()).toEqual("Manager");
    })
})