const Manager = require("../lib/Manager");
const manager = new Manager("Thomas", "123", "manager@email.com", "111");

describe("Manager", () => {

    it("should return the office number", () => {

        const name = "Test"
        const id = "123";
        const email = "test@email.com";
        const officeNumber = "101";
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.officeNumber).toBe(officeNumber);
    });

    it("should return the office number from the object", () => {

        expect(manager.officeNumber).toBe("111");
    });
    it("should return the role Manager", () => {

        expect(manager.getRole()).toBe("Manager");
    });
});