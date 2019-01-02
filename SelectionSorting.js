var numbers = [6, 2, 1, 3, 5, 4];
var result = [];

while (numbers.length != 0) {
    var smallest = Math.min(...numbers);
    var index = numbers.indexOf(smallest)
    numbers.splice(index, 1);
    result.push(smallest)
    console.log(`Messy list: ${numbers}`)
    console.log(`Sorted list: ${result}`)
};
numbers = result;
console.log(numbers);