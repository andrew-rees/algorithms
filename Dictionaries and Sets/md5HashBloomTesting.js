const readline = require('readline-sync');
const fetch = require("node-fetch");
var md5 = require('md5');

var bitmap = new Set();

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

var matchRandomWords = 0;
var noMatchRandomWords = 0;

function findThatTerm(setToSearch, searchTermFirst, searchTermMiddle, searchTermLast, searchTerm) {
    var hasStart = setToSearch.has(searchTermFirst);
    var hasMiddle = setToSearch.has(searchTermMiddle);
    var hasEnd = setToSearch.has(searchTermLast);
    //console.log("Are the segments found in the set: " + hasStart + /*hasMiddle*/ + hasEnd)
    if (hasStart && hasEnd && hasMiddle) {
        matchRandomWords++
    } else {
        noMatchRandomWords++
    };
};

var matchRandomCharacters = 0;
var noMatchRandomCharacters = 0;

function countResults(setToSearch, searchTermFirst, searchTermMiddle, searchTermLast) {
    var hasStart = setToSearch.has(searchTermFirst);
    var hasMiddle = setToSearch.has(searchTermMiddle);
    var hasEnd = setToSearch.has(searchTermLast);
    //console.log("Are the segments found in the set: " + hasStart + /*hasMiddle*/ + hasEnd)
    if (hasStart && hasEnd && hasMiddle) {
        matchRandomCharacters++
    } else {
        noMatchRandomCharacters++
    };
};

//creates first 2 letters of hash
function createFirst(hash) {
    var one = hash.charAt(0).toLowerCase();
    var two = hash.charAt(1).toLowerCase();
    var three = hash.charAt(2).toLowerCase();
    var four = hash.charAt(3).toLowerCase();
    return one + two + three + four;
};

//creates middle 2 letters of hash
function createMiddle(hash) {
    var one = hash.charAt(6).toLowerCase();
    var two = hash.charAt(7).toLowerCase();
    var three = hash.charAt(8).toLowerCase();
    var four = hash.charAt(9).toLowerCase();
    return one + two + three + four;
};

//creates last 2 letters of hash
function createLast(hash) {
    var one = hash.charAt(hash.length - 4).toLowerCase();
    var two = hash.charAt(hash.length - 3).toLowerCase();
    var three = hash.charAt(hash.length - 2).toLowerCase();
    var four = hash.charAt(hash.length - 1).toLowerCase();
    return one + two + three + four;
};

//testing
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};

var randomWords = [];

function generateRandomWords(list) {
    for (i = 0; i < 100; i++) {
        randomWords.push(list[randomNumber(0, list.length)])
    };
};

var randomCharacters = [];
function generateRandomCharacters() {
    for (i = 0; i < 100; i++) {
        randomCharacters.push(Math.random().toString(36).substring(7));
    };
};

//start the work
fetch(codeKataWords)
    .then(function (response) {
        return response.text();
    })
    .then(function (list) {
        list = list.replace(/\s+/g, ',');
        var wordsArray = list.split(',');

        // //customise length of array
        // var howManyWords = 500;
        // wordsArray = wordsArray.slice(0, howManyWords);

        //create bitmap
        wordsArray.forEach(word => {
            var hashedWord = md5(word);
            bitmap.add(createFirst(hashedWord)).add(createMiddle(hashedWord)).add(createLast(hashedWord));
        });

        //console.log(bitmap);
        console.log("Size of the bitmap: " + bitmap.size);
        console.log("Length of list of words: " + wordsArray.length)

        //run the random word tester on Bloom
        generateRandomWords(wordsArray);
        randomWords.forEach(word => {
            var hashToFind = md5(word);
            var searchTermFirst = createFirst(hashToFind);
            var searchTermMiddle = createMiddle(hashToFind);
            var searchTermLast = createLast(hashToFind);
            findThatTerm(bitmap, searchTermFirst, searchTermMiddle, searchTermLast, word);
        });
        console.log("Random Word Matches: " + matchRandomWords);
        console.log("Random Word No Matches: " + noMatchRandomWords);

        //run the random character tester on Bloom
        generateRandomCharacters();
        randomCharacters.forEach(word => {
            var hashToFind = md5(word);
            var searchTermFirst = createFirst(hashToFind);
            var searchTermMiddle = createMiddle(hashToFind);
            var searchTermLast = createLast(hashToFind);
            //findThatTerm(bitmap, searchTermFirst, searchTermMiddle, searchTermLast, word);
            countResults(bitmap, searchTermFirst, searchTermMiddle, searchTermLast)
        });
        console.log("Character Matches: " + matchRandomCharacters);
        console.log("Character No Matches: " + noMatchRandomCharacters);
    })
    .catch();