class Rat{

    constructor(name){
        this.name = name;
        this._ratsCollection = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this._ratsCollection.push(otherRat);
        }
    }

    getRats(){
        return this._ratsCollection;
    }

    toString(){
        return `${this.name}\n${this._ratsCollection.map(r => `##${r}`).join("\n")}`;
    }
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
