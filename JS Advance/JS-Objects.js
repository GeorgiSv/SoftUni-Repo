// function solveHeroicInvetory(input){
//     let heroes = [];

//     for(let line of input){
//         let [name, level, items] = line.split(" / ");
//         level = Number(level);
//         items = items ? items.split(", ") : [];

//         heroes.push({name, level, items});
//     }
    
//     console.log(JSON.stringify(heroes));
// }

// let testHeroicInvetory = ['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'];

// solveHeroicInvetory(testHeroicInvetory);


// //--

// function solveJSONTable(input){

//     //       let arr = JSON.parse(json);
//     //       let outputArr = ["<table>"];
//     //       outputArr.push(makeKeyRow(arr));
//     //       arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
//     //       outputArr.push("</table>"); 
//     //       function makeKeyRow(arr) { // ToDo }
//     //       function makeValueRow(obj) { // ToDo };
//     //       function escapeHtml(value) { // ToDo };
//     //       console.log(outputArr.join('\n'));
        
// }

// let testJSONTable = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
// '{"name":"Teo","position":"Lecturer","salary":1000}',
// '{"name":"Georgi","position":"Lecturer","salary":1000}'];
// solveJSONTable(testJSONTable);

// //---

// function solveCappyJuice(array){

//     let juices = {};
//     let bottles = {};

//     for (let index = 0; index < array.length; index++) {

//         let [name, quantity] = array[index].split(" => ");
//         quantity = Number(quantity);

//         if(name in juices){
//             juices[name] += quantity;
//         }
//         else{
//             juices[name] = quantity;
//         }

//         if (juices[name] >= 1000) {
//             if(name in bottles){
//                 bottles[name] += quantity;
//             }
//             else{
//                 bottles[name] = quantity;
//             }
            
//         }
//     }

//     for (let key in bottles) {
//         console.log(`${key} => ${Math.floor(Number(juices[key]/1000))}`);
//     }
// }

// let testCappyJuice = ['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549'];

// solveCappyJuice(testCappyJuice);

//---

function solveStoreCataloge(array){
    
    let cataloge = {};

    array = array.sort();

    for (let index = 0; index < array.length; index++) {

        let [name, price] = array[index].split(" : ");
        let initial = name[0];
        price = Number(price);

        if(!cataloge.hasOwnProperty(initial)){
            cataloge[initial] = {};
        }

        let products = cataloge[initial];

        if(!products.hasOwnProperty(name)){
            products[name] = price;
        }
    }

    let result = Object.keys(cataloge).sort();

    for (let initial of result) {
        console.log(initial);

      let products = cataloge[initial];
      let sorted = Object.keys(products);

      for (const iterator of sorted) {
          console.log(`  ${iterator}: ${products[iterator]}`);
      }
        
    }
}

solveStoreCataloge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
