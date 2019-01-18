//Exercise 1

//Set up the shop

class Item {
    constructor(name, quantity, stockLevel) {
        this.name = name;
        this.quantity = quantity;
        this.stockLevel = stockLevel;
    };
};

const beansIdealStock = new Item("beans", 30);
const bananasIdealStock = new Item("bananas", 10);
const beefIdealStock = new Item("beef", 20);
const peanutsIdealStock = new Item("peanuts", 30);
const chickenIdealStock = new Item("chicken", 20);
const quornIdealStock = new Item("quorn", 20);
const lagerIdealStock = new Item("lager", 20);

const productCatalogue = [beansIdealStock, bananasIdealStock, beefIdealStock, peanutsIdealStock, chickenIdealStock, quornIdealStock, lagerIdealStock]; //everything that should be in stock

var shop = [];
var storeRoom = [];

//reusable functions

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//fill the shop and store

function fillShop() {
    shop.push(new Item("beans", randomNumber(0, beansIdealStock.quantity)));
    shop.push(new Item("bananas", randomNumber(0, bananasIdealStock.quantity)));
    shop.push(new Item("beef", randomNumber(0, beefIdealStock.quantity)));
    shop.push(new Item("peanuts", randomNumber(0, peanutsIdealStock.quantity)));
    shop.push(new Item("chicken", randomNumber(0, chickenIdealStock.quantity)));
    shop.push(new Item("quorn", randomNumber(0, quornIdealStock.quantity)));
    shop.push(new Item("lager", randomNumber(0, lagerIdealStock.quantity)));
    //pick random item from array
    //change quantity to 0
    (function () {
        var itemToReduce = shop[randomNumber(0, shop.length)]
        itemToReduce.quantity = 0;
    })()
    console.log(`-----------Current Shop----------\n`);
    console.log(shop);
    console.log("\n");
};

function fillStoreRoom() {
    storeRoom.push(new Item("beans", randomNumber(0, (beansIdealStock.quantity / 2))));
    storeRoom.push(new Item("bananas", randomNumber(0, (bananasIdealStock.quantity / 2))));
    storeRoom.push(new Item("beef", randomNumber(0, (beefIdealStock.quantity / 2))));
    storeRoom.push(new Item("peanuts", randomNumber(0, (peanutsIdealStock.quantity / 2))));
    storeRoom.push(new Item("chicken", randomNumber(0, (chickenIdealStock.quantity / 2))));
    storeRoom.push(new Item("quorn", randomNumber(0, (quornIdealStock.quantity / 2))));
    storeRoom.push(new Item("lager", randomNumber(0, (lagerIdealStock.quantity / 2))));
    //pick random items from array
    //remove them (so there's no storage)
    (function () {
        storeRoom.splice(randomNumber(0, storeRoom.length), 1);
        storeRoom.splice(randomNumber(0, storeRoom.length), 1);
        storeRoom.splice(randomNumber(0, storeRoom.length), 1);
    })();


    console.log(`----------- Store Room----------\n`);
    console.log(storeRoom);
    console.log("\n");

    //remove any 0 items to tidy up store
    //ODESN'T WORK - JUST RETURNS EMPTY ARRAY
    storeRoom = storeRoom.filter(Item => 
        Item.quantity > 0
    );

    console.log(`----------- Store Room after tidy----------\n`);
    console.log(storeRoom);
    console.log("\n");
};


fillShop();
fillStoreRoom();


//check the stock

function findItemInCatalogue(x) {
    if (Item.name === x) {
        return Item.quantity;
    };
};

var order = [];

function checkAndOrderStock() {
    shop.forEach(value => {
        //find ideal stock level for this item
        //compare it to the actual
        //if half or less, order more up to full stock 'low'
        //if 0, order up to full and mark as 'out'
        //create items in order - return from function

        var thisName = value.name;
        var idealLevel = /*productCatalogue.find(findItemInCatalogue(thisName));*/ 20

        if (value.quantity === 0) {
            var amountRequired = idealLevel - value.quantity;
            var itemToOrder = new Item(value.name, amountRequired, "Out")
            order.push(itemToOrder);
        } else if (value.quantity < (idealLevel / 2)) {
            var amountRequired = idealLevel - value.quantity;
            var itemToOrder = new Item(value.name, amountRequired, "Low")
            order.push(itemToOrder);
        };
    });
    // console.log(`-----------Order before sorting----------\n`)
    // console.log(order);
};

checkAndOrderStock()

//need to take every item in the order, and place it in the stack/queue at the right point
//out done at end, and at front
//low at front, in order of lowness
//so sort them before passing them in

function sortDeliveryByUrgency(firstItem) {
    //deliberately putting these in reverse order as the forEach and unshift in addDelivery... deals with them in reverse
    if (firstItem.stockLevel === "Out") {
        return 1
    } else if (firstItem.stockLevel === "Low") {
        return 0
    }
}


function deliveryArrives() {
    order.sort(sortDeliveryByUrgency);
    console.log(`-----------Order after sorting----------\n`)
    console.log(order)
    console.log("\n");
};

deliveryArrives()

function addDeliverytoStoreRoomInOrder() {

    order.forEach(value => {
        storeRoom.unshift(value);
    });
    console.log(`----------- Store Room after delivery items added----------\n`);
    console.log(storeRoom);
    console.log("\n");
};
addDeliverytoStoreRoomInOrder();

//there are now duplicates in the store
//find any items with same name
//// 1) pass all items into a new array checking if name already exists before adding - SELECTION sort
//// 2) for each item in array, check it's name against every other name - INSERTION sort
//// 3) compare all names in individual arrays, if 2 are same - MERGE sort
//combine the quantities

var trolley = [];

//not working yet

function fillTrolleySelection() {
    for (i = 0; i < storeRoom.length; i++) {
        if (i === 0) {
            trolley.unshift(storeRoom[0]);
        } else if (i > 0) {
            trolley.forEach(value => {
                if (value.name === storeRoom[i].name) {
                    value.quantity = value.quantity + storeRoom[i].quantity;
                    //and don't add it to trolley
                } else {
                    trolley.unshift(storeRoom[i])
                };
            });
        };
    };
};

fillTrolleySelection();

function fillTrolleyMerge () {
    for (i = 0; i < storeRoom.length; i++) {
        storeRoom.splice()

    };
};

// for (i = 0; i < storeRoom.length; i++) { //each item in store
//     fillTrolley(storeRoom[i]);
// };
console.log(`----------- Trolley----------\n`);
console.log(trolley);