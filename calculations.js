var n = 1000;
var m = 1000;

var O = n*(Math.log(m));

//console.log(O);

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(randomNumber(0, 30))