//DONE

const lists = require('./lists.js');

function needToSortAgain(value) {
    if (value === "finito") {
        return false
    } else {
        return true
    };
};

function bubbleSort(list) {
    var start = new Date().getTime();
    //var needToSortAgain = true;
    var timesSorted = 0;
    var timesSortingAttempted = 0;

    while (needToSortAgain()) {
        var hasSortedOnThisForLoop = undefined;
        for (i = 0; i < list.length; i++) {
            var firstNumber = list[i];
            var secondNumber = list[i + 1];

            if (firstNumber > secondNumber) {
                list[i] = secondNumber;
                list[i + 1] = firstNumber;
                var hasJustSorted = true;
                if (hasJustSorted === true) {
                    hasSortedOnThisForLoop = true;
                };
            } else {
                timesSortingAttempted++
            };
            timesSorted++;
        };
        if (!hasSortedOnThisForLoop) {
            needToSortAgain("finito")
        };
    };
    //console.log(`Sorted List at end: ${ list}`);
    console.log(`Times sorted: ${timesSorted}`)
    console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
};

function runBubble() {
    for (i = 0; i < lists.numberOfLists; i++) {
        var thisList = lists.arrayOfLists[i];
        bubbleSort(thisList);
    };
};

runBubble()

module.exports.runBubble = runBubble;