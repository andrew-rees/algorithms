const readline = require('readline-sync')
const fetch = require("node-fetch");

var bitmap = new Set();

//from https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

var githubWords = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt";
var codeKataWords = "http://codekata.com/data/wordlist.txt";

fetch(githubWords)
    .then(function (response) {
        return response.text()
    })
    .then(function (list) {
        //Strip out white space and adds comma
        list = list.replace(/\s+/g, ',')
        //Convert comma separated string to array
        var wordsArray = list.split(',');
        //create bitmap
        wordsArray.forEach(word => {
            bitmap.add(word.hashCode())
        });

        //console.log(bitmap)
        console.log(bitmap.size)

        //start prompt
        console.log('Please search for a common English language word:');
        const searchTerm = readline.prompt().toLowerCase();

        function findThatTerm(setToSearch) {
            if (setToSearch.has(hashToFind)) {
                console.log("oh boy, it's probably in here somewhere...");
            } else {
                console.log("It's literally defo not in here lol xo");
            };
        };
        var start = new Date().getTime();
        
        //create terms to look for
        var hashToFind = searchTerm.hashCode();

        //look for them
        findThatTerm(bitmap)

        var end = new Date().getTime();
        var time = end - start;
        console.log('Execution time for K=1 (therefore M = list.length): ' + time);
    })
    .catch()