const Engineer = require("../lib/Engineer")


//Engineer constructor functions properly
describe("Engineer", () => {
    it('Creates a new object withiin the Intern constructor', () => {
        const engineer = new Engineer('Austin', 1, 'aumcintyre@gmail.com', 'aumcintyre');
        
        expect(engineer.github).toEqual(expect.any(String))
    })

//getGithub() functions properly

    it('Gets employee GitHub', () => {
        const engineer = new Engineer('Austin', 1, 'aumcintyre@gmail.com', "aumcintyre");

        expect(engineer.getGithub()).toEqual(expect.any(String));
    })

//Employee role is overridden to "Engineer"
    
    it('Gets employee role', () => {
        const engineer = new Engineer('Austin', 1, 'aumcintyre@gmail.com');

        expect(engineer.getRole()).toEqual("Engineer");
    })
})