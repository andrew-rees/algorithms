const readline = require('readline-sync');
const fetch = require("node-fetch");
var md5 = require('md5');

var bitmap = new Set();

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

function findThatTerm(setToSearch, searchTermFirst, /*searchTermMiddle,*/ searchTermLast, searchTerm) {
    var hasStart = setToSearch.has(searchTermFirst);
    /*var hasMiddle = setToSearch.has(searchTermMiddle);*/
    var hasEnd = setToSearch.has(searchTermLast);
    //console.log("Are the segments found in the set: " + hasStart + /*hasMiddle*/ + hasEnd)
    if (hasStart && hasEnd /*&& hasMiddle*/) {
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

// //creates middle 2 letters of hash
// function createMiddle (hash) {
//     var one = hash.charAt(6).toLowerCase();
//     var two = hash.charAt(7).toLowerCase();
//     var three = hash.charAt(8).toLowerCase();
//     var four = hash.charAt(9).toLowerCase();
//     return one + two + three + four;
// };

//creates last 2 letters of hash
function createLast(hash) {
    var one = hash.charAt(hash.length - 4).toLowerCase();
    var two = hash.charAt(hash.length - 3).toLowerCase();
    var three = hash.charAt(hash.length - 2).toLowerCase();
    var four = hash.charAt(hash.length - 1).toLowerCase();
    return one + two + three + four;
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

        // //customise length of array
        // var howManyWords = 500;
        // wordsArray = wordsArray.slice(0, howManyWords);

        //create bitmap
        wordsArray.forEach(word => {
            var hashedWord = md5(word);
            bitmap.add(createFirst(hashedWord))/*.add(createMiddle(hashedWord))*/.add(createLast(hashedWord));
        });

        console.log(bitmap);
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

        //console.log(hashToFind)

        var searchTermFirst = createFirst(hashToFind);
        //var searchTermMiddle = createMiddle(hashToFind);
        var searchTermLast = createLast(hashToFind);

        //look for them
        findThatTerm(bitmap, searchTermFirst, /*searchTermMiddle,*/ searchTermLast, searchTerm);

        var end = new Date().getTime();
        var time = end - start;
        //console.log('Execution time for K=1 (therefore M = list.length): ' + time);
    })
    .catch();