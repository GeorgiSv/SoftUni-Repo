const isOddOrEven = require("../isOddOrEven.js");

let assert = require("chai").assert;

describe("isOddOrEven function", function(){
    it("Pass number to return undefined.", function(){
        
        let actual = isOddOrEven(2);

        assert.equal(actual, undefined);
    })
    it("Pass string count to return odd.", function(){
        
        let actual = isOddOrEven("thr");

        assert.equal(actual, "odd");
    })
    it("Pass string count to return even.", function(){
        
        let actual = isOddOrEven("thre");

        assert.equal(actual, "even");
    })
});