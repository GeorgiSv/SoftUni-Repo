class Hex{
    constructor(value){
      this.value = Number(value);
    }
    valueOf(){
      return this.value;
    }
    toString(){
      return `0x${this.value.toString(16).toUpperCase()}`;
    }
    plus(hexObject){
      if(hexObject instanceof Hex ){
         return new Hex(this.value + hexObject.valueOf())
      }
    }
    minus(hexObject){
      if(hexObject instanceof Hex ){
         return new Hex(this.value - hexObject.valueOf())
      }
    }
    parse(hexString){
      return parseInt(hexString, 16);
    }
  }