//DONE

var numbers = [7, 6, 8, 9, 2, 1, 0, 11, -1, 3, 5, 4, 10, 10, 0.5];
var result = [];
console.log("List at start: " + numbers);
var timesSorted = 0;
var timesSortingAttempted = 0;

while (numbers.length != 0) {
    var smallest = Math.min(...numbers);
    var index = numbers.indexOf(smallest)
    numbers.splice(index, 1);
    result.push(smallest)
    //console.log(`Messy list: ${numbers}`)
    //console.log(`Sorted list: ${result}`)
    timesSorted++
};
numbers = result;
console.log(`Sorted List at end: ${numbers}`);
console.log(`Times sorted: ${timesSorted}`);
console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);