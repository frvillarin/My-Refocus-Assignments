const myFunctions = require("./automated-testing/bmi_calculator");

test("check if result is correct" , ()=>{
    expect(myFunctions.calculateBMI(75,1.62)).toBe(28.577960676726104);
});