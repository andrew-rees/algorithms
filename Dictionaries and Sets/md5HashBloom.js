const readline = require('readline-sync');
const fetch = require("node-fetch");
var md5 = require('md5');

var bitmap = new Set();

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

function findThatTerm(setToSearch, searchTermFirst, searchTermLast) {
    var hasStart = setToSearch.has(searchTermFirst);
    var hasEnd = setToSearch.has(searchTermLast);
    if (hasStart && hasEnd) {
        console.log("oh boy, it's probably in here somewhere...");
    } else {
        console.log("It's literally defo not in here lol xo");
    };
};

//creates first 2 letters of hash
function createFirst(hash) {
    var one = hash.charAt(0).toLowerCase();
    var two = hash.charAt(1).toLowerCase();
    return one + two;
};

//creates last 2 letters of hash
function createLast(hash) {
    var lastButOne = hash.charAt(hash.length - 2).toLowerCase();
    var last = hash.charAt(hash.length - 1).toLowerCase();
    return lastButOne + last;
};

fetch(githubWords)
    .then(function (response) {
        return response.text();
    })
    .then(function (list) {
        //Strip out white space and adds comma
        list = list.replace(/\s+/g, ',');
        //Convert comma separated string to array
        var wordsArray = list.split(',');

        //customise length of array
        var howManyWords = 300;
        var shorterArray = wordsArray.slice(0, howManyWords)

        //create bitmap
        shorterArray.forEach(word => {
            var hashedWord = md5(word);
            bitmap.add(createFirst(hashedWord)).add(createLast(hashedWord));
        });

        console.log(bitmap);
        console.log(bitmap.size);

        //start prompt
        console.log('Please search for a common English language word:');
        const searchTerm = readline.prompt().toLowerCase();

        var start = new Date().getTime();
        
        //create terms to look for
        var hashToFind = md5(searchTerm);

        var searchTermFirst = createFirst(hashToFind);
        var searchTermLast = createLast(hashToFind);

        //look for them
        findThatTerm(bitmap, searchTermFirst, searchTermLast);

        var end = new Date().getTime();
        var time = end - start;
        console.log('Execution time for K=1 (therefore M = list.length): ' + time);
    })
    .catch();