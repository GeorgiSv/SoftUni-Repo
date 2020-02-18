class Stringer{

    initialString;

    constructor(string, length){
        this.innerString  = string;
        this.initialString = string;
        this.innerLength = Number(length);
    }
    
    get length(){
        return this.innerLength;
    }
    set length(value){
        if(this.innerLength - value < 0){
            this.innerLength = 0;
        }
    }
    increase(length) {
        this.length += length;
    }

    decrease(length){
        this.innerLength -= length; 
    }

    toString(){
        this.innerString
    }
}