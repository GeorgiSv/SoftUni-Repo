const StringBuilder = require("../solveStringBuilderClass.js");
let assert = require("chai").assert;

describe("Funcionality ]", function(){

    describe("_vrfyParam", function(){
        // it("Throw exc if is not a string type", function(){
        //     //A
        //     assert.Throw(() => actual = new StringBuilder(5), TypeError);
        // })
        it("Throw exc if is not a string type + message", function(){
            
            assert.Throw(() => actual = new StringBuilder(5), TypeError, 'Argument must be string');
        })
    });

   describe("Initializations", function(){

        it("Can be instantiated with a passed in string argument or without anything", function(){
           
            let actual = new StringBuilder();
            assert.equal(actual.toString(), "");
        })
        it("Can be instantiated with a passed in string argument or without anything", function(){
            
            let actual = new StringBuilder("Hello");
            assert.equal(actual.toString(), "Hello");
        })
   });
   describe("append", function(){
        it("append text after the string", function(){
            
            let actual = new StringBuilder("Hello");
            actual.append("69");
            assert.equal(actual.toString(), "Hello69");
        })
        it("Throw exc if is not a string type + message", function(){
            
            let actual = new StringBuilder("Hello");
            assert.Throw(() => actual.append(69), TypeError, 'Argument must be string');
        })
    });
    describe("prepend", function(){
        it("prepend text before the string", function(){
            
            let actual = new StringBuilder("Hello");
            actual.prepend("69");
            assert.equal(actual.toString(), "69Hello");
        })
        it("Throw exc if is not a string type + message", function(){
            
            let actual = new StringBuilder("Hello");
            assert.Throw(() => actual.prepend(69), TypeError, 'Argument must be string');
        })
    });
    describe("insertAt", function(){
        it("Insert correct idnex", function(){
            
            let actual = new StringBuilder("Hello");
            actual.insertAt("69", 1);
            assert.equal(actual.toString()[1], "6")
        })
        it("Throw exc if is not a string type + message", function(){
            
            let actual = new StringBuilder("Hello");
            assert.Throw(() => actual.insertAt(6, 1), TypeError, 'Argument must be string');
        })
    });

    describe("remove", function(){
        it("remove correct idnex", function(){
            
            let actual = new StringBuilder("Hello");
            actual.remove(1, 3);
            assert.equal(actual.toString(), "Ho")
        })
        // it("Throw exc if is not a string type + message", function(){
            
        //     let actual = new StringBuilder("Hello");
        //     assert.Throw(() => actual.remove("string", "string"), Error);
        // })
    });
});

