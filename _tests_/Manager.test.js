const Manager = require("../lib/Manager")


//Employee constructor functions properly
describe("Manager", () => {
    it('Creates a new object withiin the Manager constructor', () => {
        const manager = new Manager('Austin', 1, 'aumcintyre@gmail.com');
        
        expect(manager.name).toEqual(expect.any(String))
        expect(manager.id).toEqual(expect.any(Number))
        expect(manager.email).toEqual(expect.any(String))
    })

    it('Gets employee role', () => {
        const manager = new Manager('Austin', 1, 'aumcintyre@gmail.com');

        expect(manager.getRole()).toEqual("Manager");
    })
})