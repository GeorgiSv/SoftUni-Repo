// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


var type = document.getElementById("slect-character");
var selecteType = type.options[type.selectedIndex].value;


//MC Starshey

var MCStarshyMovieNames = [
    'DeadPool',
    'Harry Potter',
    'Dumbledore',
    'Lucifer',
    'Michael Scofield ',
    'Capitan America',
    'John Snow'
]
var MCStarshyFamousNames = [
    'B. Borisov',
    'Slavi The Clashers',
    'Karl Marks',
    'Donald T.',
    'Putin',
]

var MCStarshyGameNames = [
    'Pikachu',
    'Spider-man',
    'El Primo',
    'Kenshi',
    'Goro',
    'Broke',
    'Trevor',
    'Hog RIder'
]


game-heroes">Gam

famous-people">F
movie-characters

if (selecteType == "famous-people") {

    function newCharacterStarshey() {

        var randomNumber = Math.floor(Math.random() * MCStarshyFamousNames.length);
        document.getElementById('characterDisplayStarshey').innerHTML = MCStarshyFamousNames[randomNumber];
    }
}
else if (selecteType.toString() == "game-heroes") {

    function newCharacterStarshey() {

        var randomNumber = Math.floor(Math.random() * MCStarshyGameNames.length);
        document.getElementById('characterDisplayStarshey').innerHTML = MCStarshyGameNames[randomNumber];
    }
}
else if (selecteType.toString() == "movie-characters") {

    function newCharacterStarshey() {

        var randomNumber = Math.floor(Math.random() * MCStarshyMovieNames.length);
        document.getElementById('characterDisplayStarshey').innerHTML = MCStarshyMovieNames[randomNumber];
    }
}

//Trendy Di 420

var TrendyNames = [

    'Aragorn ',
    'Sauron',
    'Joker',
    'Anakin Skywalker',
    'Professor X',
    'The Flash',
    'Leonardo(TMNT)',
    'The accountant',
    'Jason Bourne',
    'Dean Winchester',

]

function newCharacterTrendy() {

    var randomNumber = Math.floor(Math.random() * TrendyNames.length);
    document.getElementById('characterDisplayTrendy').innerHTML = TrendyNames[randomNumber];
}

//Guttman

var GuttmanNames = [
    'Iron Man',
    'Gandalf',
    'Optimus Prime',
    'Green Lanthern',
    'Thorin',
]

function newCharacterGuttman() {

    var randomNumber = Math.floor(Math.random() * GuttmanNames.length);
    document.getElementById('characterDisplayGuttman').innerHTML = GuttmanNames[randomNumber];
}
