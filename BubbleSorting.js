//////Bubble Sort//////


//var haveSorted;

//console.log("Before :" + numbers);

// function sort(firstNumber, secondNumber) {
//     if (firstNumber < secondNumber) {
//         numbers[0] = firstNumber;
//         numbers[1] = secondNumber;
//         //hasSortedThisTime = true
//     };
// };

//sort(6, 2);
// sort(numbers[2], numbers[3], 2);
// sort(numbers[4], numbers[5], 4);

//console.log("After :" + numbers)

//have a do while loop - while justSorted = true, do it.

// for (i = 0; i < numbers.length; i++) {
//     var hasSortedThisTime
//     sort(numbers[i], numbers[i + 1]);
//     if (hasSortedThisTime === true) {
//         haveSorted = true;
//     } else {
//         haveSorted = false;
//     }
// };

// console.log(numbers);
// console.log(haveSorted);


// var test = [2, 3]
// test.splice(0, 1, 1)
// console.log(test)

var numbers = [6, 2, 1, 3, 5, 4];
var needToSortAgain = "Yes";
console.log("At the start numbers = "+ numbers)
var timesSorted = 0;

while (needToSortAgain === "Yes") {
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
        };
        console.log(numbers + ": needToSortAgain = " + needToSortAgain + ". Sort number:" + timesSorted);
        timesSorted++;
    };
    if (!hasSortedOnThisForLoop) {
        needToSortAgain = "No";
    };
};
console.log(needToSortAgain);
console.log(`Times sorted: ${timesSorted}`)


//console.log(hasSortedOnThisForLoop)