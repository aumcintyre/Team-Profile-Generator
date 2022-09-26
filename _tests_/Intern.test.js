const Intern = require("../lib/Intern")


//Employee constructor functions properly
describe("Intern", () => {
    it('Creates a new object withiin the Intern constructor', () => {
        const intern = new Intern('Austin', 1, 'aumcintyre@gmail.com', 'Indiana');
        
        expect(intern.school).toEqual(expect.any(String))
    })

    it('Gets employee role', () => {
        const intern = new Intern('Austin', 1, 'aumcintyre@gmail.com');

        expect(intern.getRole()).toEqual("Intern");
    })
})