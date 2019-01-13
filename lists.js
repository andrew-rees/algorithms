////Random list generator

function listGenerator(length, listName) {
            const randomList = [];
            for (i = 0; i < length; i++) {
                var number = Math.floor(Math.random() * length)
                randomList.push(number)
            };
            //var nameofList = listName
            return randomList
        };

//The lists

var smallList = listGenerator(10, "SMALL LIST");
var bigList = listGenerator(30,"BIG LIST");
var massiveList = listGenerator(100, "MASSIVE LIST");
var megaList = listGenerator(1000, "MEGA LIST");
var galacticList = listGenerator(10000, "GALACTIC LIST");
//var clusterList = listGenerator(100000, "CLUSTER LIST");
var numberOfLists = 5;

//The array to pass to the sorting algorithms

var arrayOfLists = [];

function makeListsForThisSort () {
    arrayOfLists.push(smallList)
    arrayOfLists.push(bigList)
    arrayOfLists.push(massiveList)
    arrayOfLists.push(megaList)
    arrayOfLists.push(galacticList)
    //arrayOfLists.push(clusterList)
};

makeListsForThisSort();

module.exports.listGenerator = listGenerator; 
module.exports.smallList = smallList;
module.exports.bigList = bigList;
module.exports.massiveList = massiveList;
module.exports.megaList = megaList;
module.exports.galacticList = galacticList;
//module.exports.clusterList = clusterList;
module.exports.numberOfLists = numberOfLists;
module.exports.arrayOfLists = arrayOfLists;