/*
take each line and turn it into a value in an array
write a simple linear search
write a simple binary search
write a 10 times loop
work out how to know how long / how many times each search took
work out how to return 'not found'
*/



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
};



const Fs = require('fs');
Fs.readFile('words2.txt', function (err, data) {
    if (err) throw err;
    var string = data.toString()
    string = string.replace(/\s+/g, ' ');
    var textArray = string.split(' ').sort();
    var randomWord = textArray[randomNumber(0, textArray.length)];
    console.log(randomWord);
    //var startLinear = new Date().getTime();
    //linearSearch(textArray, randomWord);
    //var endLinear = new Date().getTime();
    //var timeLinear = endLinear - startLinear;
    //console.log('Execution time: ' + timeLinear);
    //var startBinary = new Date().getTime();
    binarySearch(textArray, randomWord);
    // var endBinary = new Date().getTime();
    // var timeBinary = endBinary - startBinary;
    // console.log('Execution time: ' + timeBinary);

});

function binarySearch(list, valueToFind) {
    if (list.length ===  0) {
        console.log(`${valueToFind} cannot be found`);
        return;
    }

    var middleIndex = Math.floor(list.length / 2);
    var middleValue = list[middleIndex];
    if (valueToFind === middleValue) {
        console.log(`${valueToFind} is found at position TBC`);
        return;
    } else if (valueToFind > middleValue) {
        binarySearch(list.slice(middleIndex + 1, list.length), valueToFind);
    } else {
        binarySearch(list.slice(0, middleIndex), valueToFind);
    };
};
    
function linearSearch(list, valueToFind) {
    list.forEach(value => {
        if (value === valueToFind) {
            console.log(`${valueToFind} is found at position TBC`);
            return
        };
    });
};
    
    
    // //console.log(length);
    // var array1 = list.slice(0, length / 2);
    // var array2 = list.slice((length / 2), length);
    // console.log(array1);
    // console.log(array2);
    // var startOfSecond = array2[0];
    // //console.log(startOfSecond)
    // if (valueToFind === startOfSecond) {
    //     console.log(`${valueToFind} is found at position TBC`);
    //     found = true;
    //     return
    // } else if (valueToFind > startOfSecond) {
    //     //dig into 2nd
    //     console.log("valueToFind > startOfSecond, dig into 2nd");
    // } else if (valueToFind < startOfSecond) {
    //     //dig into first
    //     console.log("valueToFind < startOfSecond, dig into 1st");
    // };
    // var end = new Date().getTime();
    // var time = end - start;
    // console.log('Execution time: ' + time);
