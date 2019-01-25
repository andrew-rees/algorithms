const readline = require('readline-sync');
const fetch = require("node-fetch");
var md5 = require('md5');

var bitmap = new Set();

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

function findThatTerm(setToSearch, searchTermFirst, searchTermMiddle, searchTermLast, searchTerm) {
    var hasStart = setToSearch.has(searchTermFirst);
    var hasMiddle = setToSearch.has(searchTermMiddle);
    var hasEnd = setToSearch.has(searchTermLast);
    //console.log("Are the segments found in the set: " + hasStart + /*hasMiddle*/ + hasEnd)
    if (hasStart && hasEnd && hasMiddle) {
        console.log(`Bloom Filter: ${searchTerm} is probably there`);
    } else {
        console.log(`Bloom Filter: ${searchTerm} is NOT there`);
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

function linearSearch(list, valueToFind) {
    var found
    for (i = 0; i < list.length; i++) {
        if (list[i] === valueToFind) {
            console.log(`Linear Search on Array: ${valueToFind} is there`);
            !!found
            return;
        };
    };
    if (!found) {
        console.log(`Linear Search on Array: ${valueToFind} is NOT there`)
    };
};

fetch(githubWords)
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

        console.log(bitmap);
        console.log(bitmap.size);
        console.log("Length of list of words: " + wordsArray.length)

        //start prompt
        console.log('Please search for a common English language word:');
        const searchTerm = readline.prompt().toLowerCase();

        //run the linear search
        var startLinear = new Date().getTime();
        linearSearch(wordsArray, searchTerm)
        var endLinear = new Date().getTime();
        var timeLinear = endLinear - startLinear;
        console.log('Execution time for Linear: ' + timeLinear);


        //run the Bloom
        var startBloom = new Date().getTime();
        var hashToFind = md5(searchTerm);
        console.log(hashToFind)
        var searchTermFirst = createFirst(hashToFind);
        var searchTermMiddle = createMiddle(hashToFind);
        var searchTermLast = createLast(hashToFind);
        findThatTerm(bitmap, searchTermFirst, searchTermMiddle, searchTermLast, searchTerm);
        var endBloom = new Date().getTime();
        var timeBloom = endBloom - startBloom;
        console.log('Execution time for Bloom: ' + timeBloom);
    })
    .catch();