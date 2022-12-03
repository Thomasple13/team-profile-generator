const Intern = require("../lib/Intern");
const intern = new Intern("Thomas", "123", "intern@email.com", "School");

describe("Intern", () => {

    it("should return a school name", () => {

        const name = "Test"
        const id = "123";
        const email = "test@email.com";
        const school = "School";
        const intern = new Intern(name, id, email, school);
        expect(intern.school).toBe(school);
    });
    it("should return the school from the object", () => {

        expect(intern.school).toBe("School");
    });

    it("should return the role Intern", () => {

        expect(intern.getRole()).toBe("Intern");
    })
})