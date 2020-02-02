function solveHeroicInvetory(input){
    let heroes = [];

    for(let line of input){
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        heroes.push({name, level, items});
    }
    
    console.log(JSON.stringify(heroes));
}

let test = ['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'];

solveHeroicInvetory(test);