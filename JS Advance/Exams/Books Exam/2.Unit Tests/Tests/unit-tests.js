const BookStore = require("../BookStore.js");
let assert = require("chai").assert;

describe("BookStore tests", function(){
    describe("asd", function(){
        it("constructor check", function(){
            let bookstr = new BookStore("ShadyRecords");
            //a
            assert.equal(bookstr.name, "ShadyRecords");
            assert.equal(bookstr.books.length, 0);
            assert.equal(bookstr.workers.length, 0);
        })
    })
    describe("stockBooks check", function(){
        it("stockBooks check", function(){
            let bookstr = new BookStore("Eminem");
            bookstr.stockBooks(["Slim Shady LP-Em", "MM LP-Em", "MTBMB-Em"])
            
            assert.equal(bookstr.books.length, 3);
            
        })
        it("stockBooks check", function(){
            let bookstr = new BookStore("Eminem");
            bookstr.stockBooks(["Slim Shady LP-Em", "MM LP-Em", "MTBMB-Em"])
            
            assert.equal(bookstr.books[1].title, "MM LP");
        })
        it("stockBooks check", function(){
            let bookstr = new BookStore("Eminem");
            bookstr.stockBooks([])
            
            assert.equal(bookstr.books[0], undefined);
        })
        it("stockBooks check", function(){
            let bookstr = new BookStore("Eminem");
            bookstr.stockBooks(["Slim Shady LP-Em", "MM LP-Em", "MTBMB-Em"])
            
            assert.equal(bookstr.books[1].author , "Em");
        })
    })

    describe("hire function check", function(){
        it("hire check - error", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.hire("Marshall", "Boss");
            
            assert.throw(() => bookstr.hire("Marshall", "Boss"), Error, 'This person is our employee');
        })
        it("hire check - OK - message", function(){
            let bookstr = new BookStore("ShadyRecords");
            
            assert.equal( bookstr.hire("Marshall", "Boss"), `Marshall started work at ShadyRecords as Boss`)
        })
        it("hire check array" , function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.hire("Marsh", "Raper");
            assert.equal( bookstr.workers.length, 1)
        })
    })
    describe("fire function check", function(){
        it("fire check - error", function(){
            let bookstr = new BookStore("ShadyRecords");
            assert.throw(() => bookstr.fire("Marshall"), Error, `Marshall doesn't work here`);
        })
        it("fire check - OK - message", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.hire("MGK", "garbidge");

            assert.equal(bookstr.fire("MGK"), `MGK is fired`)
        })
        it("fire check - OK - worker array", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.hire("MGK", "garbidge");
            bookstr.fire("MGK");

            assert.equal(bookstr.workers.length , 0);
        })
    })
    describe("sell book function", function(){
        it("if error", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.hire("Joro", "Boss");
            assert.throw(() => bookstr.sellBook("MarshallBook", "Joro" ), Error, 'This book is out of stock');
        })
        it("if error", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.stockBooks(["MarshallBook"]);
            assert.throw(() => bookstr.sellBook("MarshallBook", "Gogo" ), Error, `Gogo is not working here`);
        })
        it("if count is increased", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.stockBooks(["MarshallBook"]);
            bookstr.hire("Joro", "Boss");
            bookstr.sellBook("MarshallBook", "Joro");

            assert.equal(bookstr.workers[0].booksSold, 1)
        })
        it("if book is removed", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.stockBooks(["MarshallBook"]);
            bookstr.hire("Joro", "Boss");
            bookstr.sellBook("MarshallBook", "Joro");

            assert.isFalse(bookstr.books.includes("MarshallBook"));
        })
        it("if book is removed", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.stockBooks(["MarshallBook"]);
            bookstr.hire("Joro", "Boss");
            bookstr.sellBook("MarshallBook", "Joro");

            assert.equal(bookstr.books.length, 0);
        })
    })

    describe("sell book function", function(){
        it("if error", function(){
            let bookstr = new BookStore("ShadyRecords");
            bookstr.hire("Joro", "Boss");

            assert.equal(bookstr.printWorkers(),`Name:Joro Position:Boss BooksSold:0`);
            //
        })
        it("if error", function(){
            let bookstr = new BookStore("ShadyRecords");

            assert.equal(bookstr.printWorkers(),'');
            //
        })
    })
})
