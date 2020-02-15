const lookupChar = require("../solveCharLookup.js");
let assert = require("chai").assert;

//A
//A
//A

describe("Look up function tests", function(){
    it("Check if return undentified - not string", function(){
        let example = lookupChar(34, 1);

        assert.equal(example, undefined);
    })
    it("Check if return undentified - not int", function(){
        let example = lookupChar("asd", "asd");

        assert.equal(example, undefined);
    })
    it("Check if return incorrect index message", function(){
        let example = lookupChar("asd", 5.5);

        assert.equal(example, undefined);
    })

    it("Check if return incorrect index message", function(){
        let example = lookupChar("asd", 5);

        assert.equal(example, "Incorrect index");
    })
    it("Check if return incorrect index message", function(){
        let example = lookupChar("asd", -1);

        assert.equal(example, "Incorrect index");
    })


    it("Check if return correct answer", function(){
        let example = lookupChar("asd", 1);

        assert.equal(example, "s");
    })
})