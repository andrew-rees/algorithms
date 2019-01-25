const readline = require('readline-sync');
const fetch = require("node-fetch");
var md5 = require('md5');

var bitmap = new Set();

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

fetch(githubWords)
    .then(function (response) {
        return response.text();
    })
    .then(function (list) {
        //Strip out white space and adds comma
        list = list.replace(/\s+/g, ',');
        //Convert comma separated string to array
        var wordsArray = list.split(',');

        console.log(wordsArray)
        console.log(wordsArray.length);

        //start prompt
        console.log('Please search for a common English language word:');
        const searchTerm = readline.prompt().toLowerCase();

        var start = new Date().getTime();

        function linearSearch(list, valueToFind) {
            var found
            for (i = 0; i < list.length; i++) {
                if (list[i] === valueToFind) {
                    console.log(`${valueToFind} is certainly there!`);
                    !!found
                    return;
                };
            };
            if (!found) {
                console.log(`${valueToFind} is defoooo not there!`)
            };
        };

        linearSearch(wordsArray, searchTerm)

        var end = new Date().getTime();
        var time = end - start;
        console.log('Execution time for K=1 (therefore M = list.length): ' + time);
    })
    .catch();