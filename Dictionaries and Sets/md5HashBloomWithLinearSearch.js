const readline = require('readline-sync');
const fetch = require("node-fetch");
var md5 = require('md5');

var bitmap = new Set();

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

function findThatTerm(setToSearch, searchTermFirst, searchTermLast, searchTerm) {
    var hasStart = setToSearch.has(searchTermFirst);
    var hasEnd = setToSearch.has(searchTermLast);
    if (hasStart && hasEnd) {
        console.log(`Bloom Filter: ${searchTerm} is probably there`);
    } else {
        console.log(`Bloom Filter: ${searchTerm} is NOT there`);
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
        //create bitmap
        wordsArray.forEach(word => {
            var hashedWord = md5(word);
            bitmap.add(createFirst(hashedWord)).add(createLast(hashedWord));
        });

        //console.log(bitmap);
        console.log(bitmap.size);

        //start prompt
        console.log('Please search for a common English language word:');
        const searchTerm = readline.prompt().toLowerCase();

        var start = new Date().getTime();

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

        linearSearch(wordsArray, searchTerm)

        //create terms to look for
        var hashToFind = md5(searchTerm);

        var searchTermFirst = createFirst(hashToFind);
        var searchTermLast = createLast(hashToFind);

        //look for them
        findThatTerm(bitmap, searchTermFirst, searchTermLast, searchTerm);

        var end = new Date().getTime();
        var time = end - start;
        console.log('Execution time for K=1 (therefore M = list.length): ' + time);
    })
    .catch();