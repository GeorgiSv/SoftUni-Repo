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

// let test = ['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'];

// solveHeroicInvetory(test);

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

// let test = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
// '{"name":"Teo","position":"Lecturer","salary":1000}',
// '{"name":"Georgi","position":"Lecturer","salary":1000}'];
// solveJSONTable(test);