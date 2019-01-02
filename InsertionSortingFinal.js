//DONE

var numbers = [7, 6, 8, 9, 2, 1, 0, 11, -1, 3, 5, 4, 10, 10, 0.5];
var sortedList = [];
console.log("List at start: " + numbers);
var timesSorted = 0;
var timesSortingAttempted = 0;
for (i = 0; i < numbers.length; i++) {
    var thisNumber = numbers[i];
    if (i === 0) {
        sortedList.push(thisNumber);
        //console.log("sortedList at point " + (i+1) + ": " + sortedList);
        timesSorted++;
    } else {
        var justInserted = false;
        while (justInserted === false) {
            for (j = 0; j < sortedList.length; j++) {
                if (thisNumber <= sortedList[j]) {
                    sortedList.splice(j, 0, thisNumber);
                    justInserted = true;
                    timesSorted++;
                    break;
                } else if (thisNumber > sortedList[j]) {
                    if (j+1 === sortedList.length) {
                        sortedList.splice(j+1, 0, thisNumber);
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
console.log(`Sorted List at end: ${sortedList}`);
console.log(`Times sorted: ${timesSorted}`);
console.log(`Times sorting attempted: ${timesSorted + timesSortingAttempted}`);