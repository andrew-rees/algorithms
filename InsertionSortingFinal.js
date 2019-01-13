//DONE

const lists = require('./lists.js');

function insertionSort(list) {
    var start = new Date().getTime();
    var sortedList = [];
    //console.log("List at start: " + list);
    var timesSorted = 0;
    var timesSortingAttempted = 0;
    for (i = 0; i < list.length; i++) {
        var thisNumber = list[i];
        if (i === 0) {
            sortedList.push(thisNumber);
            //console.log("sortedList at point " + (i+1) + ": " + sortedList);
            timesSorted++;
        } else {
            var justInserted = false;
            while (!justInserted) {
                for (j = 0; j < sortedList.length; j++) {
                    if (thisNumber <= sortedList[j]) {
                        sortedList.splice(j, 0, thisNumber);
                        justInserted = true;
                        timesSorted++;
                        break;
                    } else if (thisNumber > sortedList[j]) {
                        if (j + 1 === sortedList.length) {
                            sortedList.splice(j + 1, 0, thisNumber);
                            justInserted = true;
                            timesSorted++;
                            break
                        } else {
                            justInserted = false;
                            timesSortingAttempted++
                        };
                    };
                };
            };
            //console.log("sortedList at point " + (i+1) + ": " + sortedList);
        };
    };
    //console.log(`Sorted List at end: ${sortedList}`);
    console.log(`Times sorted: ${timesSorted}`);
    console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
}

function runInsertion() {
    for (i = 0; i < lists.numberOfLists; i++) {
        var thisList = lists.arrayOfLists[i];
        insertionSort(thisList)
    };
};
//runInsertion()

module.exports.runInsertion = runInsertion;