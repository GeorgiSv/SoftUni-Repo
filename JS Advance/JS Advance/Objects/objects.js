// function solveHeroicInventory(array){
   
//    let heroArray = [];

//    for (const words of array) {
//        let objectHero = {};
//        let [name, level, item] = words.split(" / ");
//        let items = item.split(", ");

//        objectHero.name = name;
//        objectHero.level = Number(level);
//        objectHero.items = items;

//        heroArray.push(objectHero);
     
//    }

//    console.log(JSON.stringify(heroArray));
   
// }

// let test = ['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'];

// solveHeroicInventory(test);


function CappyJuice(array){  
    let juices = {};

    for (const line of array) {
        let [type, quantity] = line.split(" => ");

        if(!juices[type]){

            juices[type] = Number(quantity);
        }
        else{
            juices[type] += Number(quantity);
        }
    }

    for (const key in juices) {
       if(juices[key]  >= 1000){
           console.log(`${key} => ${(juices[key] / 1000).toFixed()}`);
       }
    }
}

let test1 = ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'];

CappyJuice(test1);

function solveStoreCataloge(array){

    let cataloge = {};

    array = array.sort();

        for (const line of array) {
            let [product, price] = line.split(" : ");
            let intial = product[0];
            price = Number(price);

           
            if (!cataloge[intial]) {
                cataloge[intial] = [];
            }

            let products = cataloge[intial];

            if(!products.hasOwnProperty(product)){
                products[product] = price;
            }
        }

        for (const key in cataloge) {
           console.log(key);

           for (const object in cataloge[key]) {
             console.log("  " + object + `: ${(cataloge[key][object])}`);
           }
        }
}

let test2 = ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'];
solveStoreCataloge(test2);