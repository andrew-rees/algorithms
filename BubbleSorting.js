//////Bubble Sort//////

var numbers = [6, 2, 1, 3, 5, 4];
var haveSorted;

function sort(first, second) {
    if (first > second) {
        numbers.splice(i, 1, second);
        numbers.splice(i + 1, 1, first);
        hasSortedThisTime = true
    } else {
        //do nothing
    };
};

//have a do while loop - while justSorted = true, do it.

for (i = 0; i < numbers.length; i++) {
    var hasSortedThisTime
    sort(numbers[i], numbers[i + 1]);
    if (hasSortedThisTime === true) {
        haveSorted = true;
    } else {
        haveSorted = false;
    }
};

console.log(numbers);
console.log(haveSorted);


// var test = [2, 3]
// test.splice(0, 1, 1)
// console.log(test)