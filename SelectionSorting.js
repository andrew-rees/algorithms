//DONE

const lists = require('./lists.js');

var arrayOfLists = [];
function makeListsForThisSort () {
    var one = lists.smallList;
    arrayOfLists.push(one)
    var two = lists.bigList;
    arrayOfLists.push(two)
    var three = lists.massiveList;
    arrayOfLists.push(three)
    var four = lists.megaList;
    arrayOfLists.push(four)
    var five = lists.galacticList;
    arrayOfLists.push(five)
    var six = lists.clusterList;
    arrayOfLists.push(six)
}


function selectionSort(list) {
    var start = new Date().getTime();
    var result = [];
    //console.log(`------------------ ${} ------------------`)
    //console.log(`List at start: ${list}`);
    console.log(`Length: ${list.length}`)
    var timesSorted = 0;
    var timesSortingAttempted = 0;
    while (list.length != 0) {
        var smallest = Math.min(...list);
        var index = list.indexOf(smallest)
        list.splice(index, 1);
        result.push(smallest);
        timesSorted++;
    };
    list = result;
    //console.log(`Sorted ${listName} at end: ${list}`);
    console.log(`Times sorted: ${timesSorted}`);
    console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
};

//Run it here

makeListsForThisSort();
for (i = 0; i < lists.numberOfLists; i++) {
    var thisList = arrayOfLists[i];
    //arrayOfLists[i]
    //console.log()
    selectionSort(thisList)
}