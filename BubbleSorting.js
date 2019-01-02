//DONE

var numbers = [7, 6, 8, 9, 2, 1, 0, 11, -1, 3, 5, 4, 10, 10, 0.5];
var needToSortAgain = true;
console.log("At the start numbers = "+ numbers)
var timesSorted = 0;
var timesSortingAttempted = 0;

while (needToSortAgain) {
    var hasSortedOnThisForLoop = undefined;
    for (i = 0; i < numbers.length; i++) {
        var firstNumber = numbers[i];
        var secondNumber = numbers[i + 1];

        if (firstNumber > secondNumber) {
            numbers[i] = secondNumber;
            numbers[i + 1] = firstNumber;
            var hasJustSorted = true;
            if (hasJustSorted === true) {
                hasSortedOnThisForLoop = true
            };
        } else {
            timesSortingAttempted++
        }
        //console.log(numbers + ": needToSortAgain = " + needToSortAgain + ". Sort number:" + timesSorted);
        timesSorted++;
    };
    if (!hasSortedOnThisForLoop) {
        needToSortAgain = false;
    };
};
console.log(`Sorted List at end: ${numbers}`);
console.log(`Times sorted: ${timesSorted}`)
console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);