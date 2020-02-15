const mathEnforcer = require("../solveMathEnforcer.js");
let assert = require("chai").assert;

describe("test an object named mathEnforcer", function(){
    describe("AddFive", function(){

        it("If the parameter is NOT a number, the funtion should return undefined.", function(){

            assert.equal(mathEnforcer.addFive("asd"), undefined);
        })
        it("If the parameter is a number, add 5 to it, and return the result", function(){
    
            assert.equal(mathEnforcer.addFive(5), 10);
        })
        it("If the parameter is a number, add 5 to it, and return the result", function(){
    
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        })
        it("If the parameter is a number, add 5 to it, and return the result", function(){
    
            assert.equal(mathEnforcer.addFive(-5), 0);
        })
  
    });

    describe("subtractTen", function(){

        it("If the parameter is NOT a number, the funtion should return undefined.", function(){

            assert.equal(mathEnforcer.subtractTen("asd"), undefined);
        })
        it("If the parameter is a number, subtract 10 from it, and return the result.", function(){

            assert.equal(mathEnforcer.subtractTen(10), 0);
        })
        it("If the parameter is a number, subtract 10 from it, and return the result.", function(){

            assert.equal(mathEnforcer.subtractTen(-10), -20);
        })
        it("If the parameter is a number, subtract 10 from it, and return the result.", function(){

            assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
        })

    })
    describe("sum", function(){

        it("If the parameter is NOT a number, the funtion should return undefined.", function(){

            assert.equal(mathEnforcer.sum("asd", 2), undefined);
        })
        it("If the parameter is NOT a number, the funtion should return undefined.", function(){

            assert.equal(mathEnforcer.sum(2, "asd"), undefined);
        })
        
        it("fF both parameters are numbers, the function should return their sum. ", function(){

            assert.equal(mathEnforcer.sum(2, 2), 4);
        })
        it("fF both parameters are numbers, the function should return their sum. ", function(){

            assert.equal(mathEnforcer.sum(2, 2.5), 4.5);
        })
        it("fF both parameters are numbers, the function should return their sum. ", function(){

            assert.equal(mathEnforcer.sum(2, -2), 0);
        })

    })
});
