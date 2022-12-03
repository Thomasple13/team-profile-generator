const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Thomas", "123", "engineer@email.com", "engineer@github.com");

describe("Engineer", () => {

    it("should return a github username", () => {
        const name = "Test"
        const id = "123";
        const email = "test@email.com";
        const gitUser = "test@github.com";
        const engineer = new Engineer(name, id, email, gitUser);
        expect(engineer.gitUser).toBe(gitUser);
    });

    it("should return the github username from the object", () => {

        expect(engineer.gitUser).toBe("engineer@github.com");
    });

    it("should return the role Engineer", () => {

        expect(engineer.getRole()).toBe("Engineer");
    })
});