//functions

function addtoStartOfList (item, list) {
    list.push(item);
};

function addtoIndexInList (item, list, index) {
    list.splice(index, 0, item);
};

function addToEndOfList (item, list) {
    list.unshift(item);
};

function queryList (item, list, query) {
    list.filter(query => item.value === query) //
};

function deleteFromList (item, list, index) {
    list.splice(/*find*/, index, item)
};

function createList () {
    
};

function createItem () {
    
};

////////////////////////////

class List {
    constructor(item) {
        this.item = item
    };
};



////////////////////////////////

class SingleLinkedItem {
    constructor(value, nextItem) {
        this.value = value;
        this.nextItem = nextItem;
    };
};

var singleLinkedList = new List(item1, item2, item3, item4)

var item1 = new SingleLinkedItem(1, 2);
var item2 = new SingleLinkedItem(2, 3);
var item3 = new SingleLinkedItem(3, 4);
var item4 = new SingleLinkedItem(4, 6);


//////////////////////////////////


class DoubleLinkedItem {
    constructor(value, nextItem, previousItem) {
        this.value = value;
        this.nextItem = nextItem;
        this.previousItem = previousItem;
    };
};

var doubleLinkedList = new List(item5, item6, item7, item8)

var item5 = new DoubleLinkedItem(1, 2, null);
var item6 = new DoubleLinkedItem(2, 3, 1);
var item7 = new DoubleLinkedItem(3, 4, 2);
var item8 = new DoubleLinkedItem(4, null, 3);


