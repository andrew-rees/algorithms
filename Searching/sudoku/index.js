/*
Sudoko – think of each unsolved cell as a tree, with the children as the first 2 guesses.
Check each cell – what are all the possibilities? Then start with the ones with least amount of possibilities, and go from there.
*/

class Board {
    constructor(nineSquare, tile) {
        this.nineSquare = nineSquare;
        this.tile = tile;
    };
    static loadBoard() {

    };
};

class Tile {
    constructor(xAxis, yAxis, value) {
        this.value = value;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    };
};

function startBoard() {
    var a3 = new Tile(1, 3, 9);
    var a4 = new Tile(1, 4, 7);
    var b3 = new Tile(2, 3, 8);
    var b4 = new Tile(2, 4, 2);
    var b7 = new Tile(2, 7, 5);
    var c3 = new Tile(3, 3, 3);
    var c6 = new Tile(3, 6, 5);
    var c8 = new Tile(3, 8, 8);
    var d2 = new Tile(4, 2, 5);
    var d4 = new Tile(4, 4, 6);
    var d7 = new Tile(4, 7, 3);
    var d9 = new Tile(4, 9, 1);
    var f1 = new Tile(6, 1, 6);
    var f3 = new Tile(6, 3, 2);
    var f6 = new Tile(6, 6, 3);
    var f8 = new Tile(6, 8, 4);
    var g2 = new Tile(7, 2, 2);
    var g4 = new Tile(7, 4, 3);
    var g7 = new Tile(7, 7, 9);
    var h3 = new Tile(8, 3, 4);
    var h6 = new Tile(8, 6, 8);
    var h7 = new Tile(8, 7, 7);
    var i6 = new Tile(9, 6, 2);
    var i7 = new Tile(9, 7, 1);
}