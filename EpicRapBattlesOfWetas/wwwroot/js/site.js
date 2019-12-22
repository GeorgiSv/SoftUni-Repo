﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function GetSelectedTpeValue() {

    var type = document.getElementById("slect-character");
    var selecteType = type.options[type.selectedIndex].value;
    return selecteType;
}


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
    'Hog RIder',
]


function newCharacterStarshey() {

    if (GetSelectedTpeValue() == "famous-people") {

        var randomNumber = Math.floor(Math.random() * MCStarshyFamousNames.length);
        document.getElementById('characterDisplayStarshey').innerHTML = MCStarshyFamousNames[randomNumber];
    }
    else if (GetSelectedTpeValue() == "game-heroes") {

        var randomNumber = Math.floor(Math.random() * MCStarshyGameNames.length);
        document.getElementById('characterDisplayStarshey').innerHTML = MCStarshyGameNames[randomNumber];
    }
    else if (GetSelectedTpeValue() == "movie-characters") {

        var randomNumber = Math.floor(Math.random() * MCStarshyMovieNames.length);
        document.getElementById('characterDisplayStarshey').innerHTML = MCStarshyMovieNames[randomNumber];
    }
}


//Trendy Di 420

var TrendyMovieNames = [

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

var TrendyFamousNames = [

    "Tom Hardy",
    "Christian Bale",
    "Lenin",
    "Bruce Willis",
    "James Franco",
    "Slavi Trifonov",
    "Barrack Obama",
    "Ts.Tsvetanov",
    "Hr.Stoichkov",
    "Hr.Botev",
]



var TrendyGameNames = [

    "Talion/Celebrimbor",
    "Scorpion",
    "Batman",
    "Quan Chi",
    "Noob Saibot",
    "Tremor",
    "Shinnok",
    "Ben Ten",
    "Kung Jin",
    "Ermac"
]

function newCharacterTrendy() {

    if (GetSelectedTpeValue() == "famous-people") {

        var randomNumber = Math.floor(Math.random() * TrendyFamousNames.length);
        document.getElementById('characterDisplayTrendy').innerHTML = TrendyFamousNames[randomNumber];
    }
    else if (GetSelectedTpeValue() == "game-heroes") {

        var randomNumber = Math.floor(Math.random() * TrendyGameNames.length);
        document.getElementById('characterDisplayTrendy').innerHTML = TrendyGameNames[randomNumber];
    }
    else if (GetSelectedTpeValue() == "movie-characters") {

        var randomNumber = Math.floor(Math.random() * TrendyMovieNames.length);
        document.getElementById('characterDisplayTrendy').innerHTML = TrendyMovieNames[randomNumber];
    }
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
