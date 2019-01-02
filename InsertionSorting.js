var numbers = [6, 2, 1, 3, 5, 4];
var results = [];

var firstNumber = numbers.splice(0, 1);
results.push(firstNumber);

//now the comparisions

for (i = 0; i < numbers.length; i++) {
    var thisNumber = numbers[i];
    numbers.splice(0, 1);
    //runs infinitely
    for (j = 0; j < results.length; i++) {
        if (thisNumber < results[j]) {
            results.splice(j-1, 0, thisNumber);
        } else {
            results.splice(j+1, 0, thisNumber);
        }
    };

}






var nextNumber = numbers[0];

if (nextNumber > thisNumber) {

}