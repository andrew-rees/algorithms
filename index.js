const selection = require('./SelectionSorting.js');
const bubble = require('./BubbleSorting.js');
const insertion = require('./InsertionSortingFinal');

console.log("-------------- Selection Sort ---------------\n");
selection.runSelection();
console.log("\n----------------------")

console.log("-------------- Bubble Sort ---------------\n");
bubble.runBubble();
console.log("\n----------------------")

console.log("-------------- Insertion Sort ---------------\n");
insertion.runInsertion();
console.log("\n----------------------")

