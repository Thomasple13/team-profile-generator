const Employee = require('../lib/Employee')

test("can instantiate employee instance", () =>{
    const e = new Employee();
    expect(typeof(e)).toBe("object");
}) 

test("can set name via constructor arguments", () =>{
    const name = 'Alice'
    const e = new Employee(name)
    expect(e.name).toBe(name)
})

test("can set id via constructor argument", ()=>{
    const testValue =100
    const e = new Employee("Yoo", testValue)
    expect(e.id).toBe(testValue)
})

test("can set email via constructor argument", ()=>{
    const testValue ="test@test.com"
    const e = new Employee("Yoo", 1 , testValue)
    expect(e.email).toBe(testValue)
})
