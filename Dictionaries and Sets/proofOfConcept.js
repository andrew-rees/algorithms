//bloom filter
//http://codekata.com/kata/kata05-bloom-filters/
//https://www.jasondavies.com/bloomfilter/

/* 
PLAN
- fetch the list from https://github.com/first20hours/google-10000-english/blob/master/20k.txt
- add the list values to a bitmap [map]
-- take a value, give it 3 hash values, add the 3 values to the bitmap (to start, don't do hashes, do something simpler)
- get a user input and allow someone to search.
-- take the value, do the 3 hashes/things on it, and see if all of them are there in the map (map.has())
- return "its probably there" for all 3, and "it's defo not" is one is missing
*/

///////basic encoding - take 1st and last letters and add to bitmap, instead of a hash////////

const readline = require('readline-sync')

var smallListOfWords = ["Barry", "Norma", "Clive", "Umberto", "Dangmar"]

var bitmap = new Set();

//finds creates first letter (instead of a hash)
function createFirst(word) {
    return word.charAt(0).toLowerCase()
};

//creates last letter (instead of a hash)
function createLast(word) {
    return word.charAt(word.length - 1).toLowerCase()
};

//find the Term within the Set
function findThatTerm(setToSearch) {
    var hasFirstLetter = setToSearch.has(searchTermFirst);
    var hasLastLetter = setToSearch.has(searchTermLast);
    if (hasFirstLetter && hasLastLetter) {
        console.log("oh boy, it's probably in here somewhere...");
    } else {
    console.log("It's literally defo not in here lol xo");
    };   
};

//create bitmap
smallListOfWords.forEach(word => {
    bitmap.add(createFirst(word)).add(createLast(word))
});

//start prompt
console.log('Please search for a name:');
const searchTerm = readline.prompt().toLowerCase();

//create terms to look for
var searchTermFirst = createFirst(searchTerm);
var searchTermLast = createLast(searchTerm);

//look for them
findThatTerm(bitmap)