/*
Trying to use:
- create const arr = [1,2,3]
- insert arr[4] = 5
- Retrieving elements: const elem = arr[4]
- Querying the length of an array: arr.length
*/

var numbers = [6, 2, 1, 3, 5, 4];
var sortedList = [];

/*

[6, 2, 1, 3, 5, 4]; [];
[2, 1, 3, 5, 4]; [6];
[1, 3, 5, 4]; [2, 6]; //1 loop
[3, 5, 4]; [1, 2, 6]; //1 loop
[5, 4]; [1, 2, 3, 6]; //3 loops
[4]; [1, 2, 3, 5, 6]; //4 loops
[]; [1, 2, 3, 4, 5, 6]; //4 loops

*/

/*
define a list of items to be sorted
have a list you are sorting into
for each one of the first list
- try to add at position 0, if smaller than list[0], splice to position 0, if not, move on
- try to add at position 1, if smaller than list[1], splice to position 1, if not, move on
*/


for (i = 0; i < numbers.length; i++) {
    var thisNumber = numbers[i];
    if (i === 0) {
        sortedList.push(thisNumber);
    } else {
        var justInserted = false;
        while (justInserted === false) {
            for (j = 0; j < sortedList.length; j++) {
                if (thisNumber < sortedList[j]) {
                    sortedList.splice(j, 0, thisNumber);
                    justInserted = true;
                    break
                } else {
                    justInserted = false;
                }
            };
        };
    };
};






//make number
//compare it to each number in sortedList
// if >, add to right
//if <, add to left
// for (j = 0; j < sortedList.length; j++) {
//     var isEqOrSm = undefined;
//     if (thisNumber <= sortedList[j]) {
//         isEqOrSm = true;
//     } else {
//         isEqOrSm = false;
//     };
//     switch (isEqOrSm) {
//         case true:
//             sortedList.splice(j, 0, thisNumber);
//             console.log("Sorted List after thisNumber <= sortedList[j]: " + sortedList)
//             break;
//         case false:
//             console.log("Nothing done")
//             break;
//     };


// var hasAdded = false;
// while (hasAdded = false) {
//     if (thisNumber <= sortedList[j]) {
//         sortedList.splice(j, 0, thisNumber);
//         console.log("Sorted List after thisNumber <= sortedList[j]: " + sortedList)
//         console.log("numbers after thisNumber <= sortedList[j]: " + numbers)
//         //howManyLoops++
//         thisNumber = numbers.splice(i, 1);
//         hasAdded = true;
//     };
// };


//    };
//console.log("This number " + thisNumber + "took" + howManyLoops + "many loops");
//  };
//};
console.log(`Sorted List at end: ${sortedList}`)
//console.log(`Numbers at end: ${numbers}`)





/////Old attempt

// var numbers = [6, 2, 1, 3, 5, 4];
// var results = [];

// var firstNumber = numbers.splice(0, 1);
// results.push(firstNumber);

// //now the comparisions

// for (i = 0; i < numbers.length; i++) {
//     var thisNumber = numbers[i];
//     numbers.splice(0, 1);
//     //runs infinitely
//     for (j = 0; j < results.length; i++) {
//         if (thisNumber < results[j]) {
//             results.splice(j-1, 0, thisNumber);
//         } else {
//             results.splice(j+1, 0, thisNumber);
//         }
//     };

// }






// var nextNumber = numbers[0];

// if (nextNumber > thisNumber) {

// }


///Attempt after reading online

/*function insertionSort(array) 
  Loop through array
    Create temp var for current element
    Create var and set equal to previous element's index
    Loop backwards while index >= 0 and current element > temp var
      Set next element equal to current element
    Set next element equal to temp */