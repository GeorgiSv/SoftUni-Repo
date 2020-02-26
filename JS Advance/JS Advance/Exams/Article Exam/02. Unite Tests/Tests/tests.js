const Parser = require("../solution");
let assert = require("chai").assert;

//A
//A
//A

describe("class tests", function(){
    describe("donctructor", function(){
        it("Constructor test", function(){
            let parser = new Parser('[{"Nancy":"architect"}]');
        
            assert.equal(parser._data[0].Nancy, 'architect');
            assert.equal(parser._log.length, 0);
        })
        it("Constructor test", function(){
            let parser = new Parser('[{"Nancy":"architect"}]');

            assert.equal(parser.data.length, 1);
        })
    })
    describe("addEntries", function(){
        it("Constructor test", function(){
            //parser.addEntries("Steven:tech-support Edd:administrator")
            let parser = new Parser('[{"Nancy":"architect"}]');
            parser.addEntries("Steven:tech-support Edd:administrator")
            assert.equal(parser.addEntries("Steven:tech-support Edd:administrator"), "Entries added!");
        })

    })
    
    describe("removee", function(){
        it("removee test", function(){
            //parser.addEntries("Steven:tech-support Edd:administrator")
            let parser = new Parser('[{"Nancy":"architect"}]');

            assert.equal(parser.removeEntry("Nancy"), "Removed correctly!");
        })
        it("removee test", function(){
            //parser.addEntries("Steven:tech-support Edd:administrator")
            let parser = new Parser('[{"Nancy":"architect"}]');
            parser.removeEntry("Nancy");

            assert.equal(parser.data.length, 0);
        })
        // it("removee test", function(){
        //     //parser.addEntries("Steven:tech-support Edd:administrator")
        //     let parser = new Parser('[{"Nancy":"architect"}]');
        //     parser.removeEntry("Nancy");

        //     assert.isTrue(parser.data[0].Nancy.entry);
        // })
        it("removee test", function(){
            //parser.addEntries("Steven:tech-support Edd:administrator")
            let parser = new Parser('[{"Nancy":"architect"}]');
           

            assert.throw(() =>  parser.removeEntry("sd"), Error,"There is no such entry!");
        })
    })
    describe("print", function(){
        it("print test", function(){
            //parser.addEntries("Steven:tech-support Edd:administrator")
            let parser = new Parser('[{"Nancy":"architect"}]');
            assert.equal(parser.print(), "id|name|position\n0|Nancy|architect");
        })
    })
})