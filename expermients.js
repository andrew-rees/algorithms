var shiz = [];

var first = {};
var second = {};

first.name = "foo";
first.number = 1;
second.name = "bar";
second.number = 2;

shiz.push(first.name, first.number)
shiz.push(second.name, second.number)

//console.log(shiz)

//console.log(first.name)


function listGenerator(amount, listName) {
    const randomList = [];
    for (i = 0; i < 5; i++) {
        var number = Math.floor(Math.random() * 5)
        randomList.push(number)
    };
    var nameofList = listName
    return randomList
};

////Random list generator

var smallList = listGenerator(10, "SMALL LIST");

function run (nameofList) {
    console.log(listGenerator(nameofList))
//console.log(smallList.listGenerator.amount)
}

run();


for (i = 0; i < numbers.length; i++) {
    var thisNumber = numbers[i];
	for (j = 0; j < sortedList.length; j++) {
		if (thisNumber < sortedList[j]) {
			break;
		}
	};
	sortedList.splice(j, 0, thisNumber);
};

