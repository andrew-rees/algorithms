//DONE

const lists = require('./lists.js');

var start = new Date().getTime();
var smallList = [7, 6, 8, 9, 2, 1, 0, 11, -1, 3, 5, 4, 10, 10, 0.5];        
var bigList /* 30 */ = [6, 76,49, 51, 15, 16, 39, 72, 6, 91, 99, 79, 9, 65, 62, 0, 97, 35, 51, 20, 91, 86, 37, 28, 66, 93, 76, 98, 69, 32];
var massiveList /* 100 */ = [57, 60, 0, 20, 24, 74, 92, 85, 37, 60, 48, 34, 47, 36, 59, 27, 59, 95, 40, 70, 36, 21, 67, 7, 3, 95, 64, 22, 84, 49, 61, 90, 41, 95, 22, 73, 95, 99, 6, 86, 37, 64, 33, 69, 54, 82, 22, 32, 77, 98, 37, 76, 40, 40, 26, 13, 63, 24, 65, 31, 34, 53, 48, 66, 49, 36, 79, 99, 56, 81, 81, 20, 50, 80, 5, 55, 65, 47, 97, 87, 39, 61, 80, 49, 60, 71, 86, 67, 52, 58, 15, 19, 48, 8, 50, 66, 37, 68, 67, 85,];  
    
var needToSortAgain = true;
console.log("At the start  massiveList = "+  massiveList)
var timesSorted = 0;
var timesSortingAttempted = 0;

while (needToSortAgain) {
    var hasSortedOnThisForLoop = undefined;
    for (i = 0; i <  massiveList.length; i++) {
        var firstNumber =  massiveList[i];
        var secondNumber =  massiveList[i + 1];

        if (firstNumber > secondNumber) {
             massiveList[i] = secondNumber;
             massiveList[i + 1] = firstNumber;
            var hasJustSorted = true;
            if (hasJustSorted === true) {
                hasSortedOnThisForLoop = true
            };
        } else {
            timesSortingAttempted++
        }
        //console.log( massiveList + ": needToSortAgain = " + needToSortAgain + ". Sort number:" + timesSorted);
        timesSorted++;
    };
    if (!hasSortedOnThisForLoop) {
        needToSortAgain = false;
    };
};
console.log(`Sorted List at end: ${ massiveList}`);
console.log(`Times sorted: ${timesSorted}`)
console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);