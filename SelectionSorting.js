//DONE

const lists = require('./lists.js');

function min(input) {
    var smallest = input[0];
    input.forEach(value => {
        if (value < smallest) {
            smallest = value;
        };
        return smallest;
    });
};

function selectionSort(list, smallest) {
    var start = new Date().getTime();
    var result = [];
    console.log(`Length: ${list.length}`)
    var timesSorted = 0;
    var timesSortingAttempted = 0;
    while (list.length != 0) {
        min(list);
        var index = list.indexOf(smallest)
        list.splice(index, 1);
        result.push(smallest);
        timesSorted++;
    };
    list = result;
    console.log(`Times sorted: ${timesSorted}`);
    console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
};



//Run it here

function runSelection() {
    for (i = 0; i < lists.numberOfLists; i++) {
        var thisList = lists.arrayOfLists[i];
        selectionSort(thisList);
    };
};

module.exports.runSelection = runSelection;