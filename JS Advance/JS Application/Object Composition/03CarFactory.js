function solve(input){
    const engineTypes = [
        {power: 90, volume: 1800 },
        {power: 120, volume: 2400 },
        {power: 200, volume: 3500 },
    ]

    let currEngine = engineTypes.find(e => e.power > input.power || e.power === input.power);

    return { 
    model: input.model,
    engine: currEngine,
    carriage: { type: input.carriage,
                color: input.color },
    wheels: Array(4).fill(input.wheelsize % 2 === 0 ? input.wheelsize - 1 : input.wheelsize)
};
}

let test = { model: 'VW Golf II',
power: 200,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
;
console.log(solve(test));
