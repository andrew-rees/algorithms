var numbers = [7, 6, 8, 9, 2, 1, 0, 11, -1, 3, 5, 4, 10, 10, 0.5];
var result = [];
var lessSoSwapped = 0;
var moreSoNotSwapped = 0;
var equalSoNotSwapped = 0;

function mergeSort() {
    for (i = 0; i < numbers.length; i += 2) {
        var array1 = [];
        array1.push(numbers[i]);
        var array2 = [];
        array2.push(numbers[i + 1]);
        //numbers.splice(numbers[i], 1).splice(numbers[i+1], 1);
        if (array1[0] < array2[0]) {
            result.push(array1[0]);
            result.push(array2[0]);
            lessSoSwapped++
        } else if (array1[0] > array2[0]) {
            result.push(array2[0]);
            result.push(array1[0]);
            moreSoNotSwapped++
        } else if (array1[0] = array2[0]) {
            result.push(array2[0]);
            result.push(array1[0]);
            equalSoNotSwapped++
        };
    };
    numbers = result
    console.log(numbers)
}

while (moreSoNotSwapped < numbers.length) {
    mergeSort()
}







/*

function splitArray (array) {
    var splitPoint = Math.floor(numbers.length / 2)
    var firstArray = numbers.slice(0, splitPoint)
    var secondArray = numbers.slice(splitPoint)
    // console.log(firstArray);
    // console.log(secondArray)

}
splitArray(numbers);


//create arrays for each item in the list
//to do this, split both of the lists into 2
//then, split these new lists into 2, etc


//from the ol' internet.

function mergeSort (arr) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeSort(arr.slice(0, mid));
    var subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}

console.log(mergeSort(numbers))
*/