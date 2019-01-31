//http://codekata.com/kata/kata05-bloom-filters/
//https://www.jasondavies.com/bloomfilter/

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
function findThatTerm(setToSearch, searchTermFirst, searchTermLast) {
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
findThatTerm(bitmap, searchTermFirst, searchTermLast)
