// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function GetSelectedTpeValue() {

    var type = document.getElementById("slect-character");
    var selecteType = type.options[type.selectedIndex].value;
    return selecteType;
}

//Musix function is here..
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

//Sleep function - slow donw result..
var milliseconds = 5900;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

//MC Starshey

var MCStarshyMovieNames = [
    "Deadpool",
    "Dumbledore",
    "Lucifer",
    "Harry Potter",
    "John Snow",
    "Naruto",
    "Avatar",
    "Raphael(TMNT)",
    "Sherlock",
    "Jason GX",
]
var MCStarshyFamousNames = [
    "B. Borisov",
    "Slavi The Clashers",
    "Karl Marks",
    "V.Putin",
    "Rowan Atkinson",
    "Robert Downey Jr",
    "Jason Momoa",
    "Charlie sheen",
    "Bob Marley",
    "Mike Tyson",
]

var MCStarshyGameNames = [
    "Goro",
    "Kenshi",
    "Trevor",
    "Pikachu",
    "Super Mario",
    "Sonic",
    "Spider - man",
    "Hog Rider",
    "El Primo",
    "Colt",
]


function newCharacterStarshey() {

    play(); //<- set it before code execution


    sleep(milliseconds).then(() => {
        //do stuff

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
    })

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
    "Sylvester Stallone",
]



var TrendyGameNames = [

    "Talion/Celebrimbor",
    "Scorpion",
    "Batman",
    "Bull",
    "Noob Saibot",
    "Marick",
    "Shinnok",
    "Ben Ten",
    "Mega PEKKA",
    "Ermac",
]

function newCharacterTrendy() {

    play(); //<- set it before code execution


    sleep(milliseconds).then(() => {
        //do stuff

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
    })

}


//Guttman

var GuttmanMovieNames = [

    "Iron Man",
    "Gandalf",
    "Optimus Prime",
    "Green Lanthern",
    "Thorin",
    "Dundee Crocodile",
    "Obi - Wan",
    "Yoda",
    "Ragnar Lothbrok",
    "The Hound",
]
var GuttmanFamousNames = [

    "David Hasselhoff",
    "Benedict Cumberbatch",
    "Richard Armitage",
    "Leonardo Dicaprio",
    "Johnny Depp",
    "Steven Seagal",
    "Jet Li",
    "Kevin Sorbo",
    "Rayn Reynolds",
    "Dolph Lundgren",
]

var GuttmanGameNames = [

    "Kratos",
    "Geralt",
    "Dovahkiin",
    "Sole survivor",
    "DoomGuy",
    "Sub - Zero",
    "Fujin",
    "Death Rider",
    "Nathan Drake",
    "Strong",
]

function newCharacterGuttman() {

    play(); //<- set it before code execution


    sleep(milliseconds).then(() => {
        //do stuff

        if (GetSelectedTpeValue() == "famous-people") {

            var randomNumber = Math.floor(Math.random() * GuttmanFamousNames.length);
            document.getElementById('characterDisplayGuttman').innerHTML = GuttmanFamousNames[randomNumber];
        }
        else if (GetSelectedTpeValue() == "game-heroes") {

            var randomNumber = Math.floor(Math.random() * GuttmanGameNames.length);
            document.getElementById('characterDisplayGuttman').innerHTML = GuttmanGameNames[randomNumber];
        }
        else if (GetSelectedTpeValue() == "movie-characters") {

            var randomNumber = Math.floor(Math.random() * GuttmanMovieNames.length);
            document.getElementById('characterDisplayGuttman').innerHTML = GuttmanMovieNames[randomNumber];
        }
    })
}


