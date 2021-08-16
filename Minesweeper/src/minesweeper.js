var xSize = 8;
var ySize = 8;
var numberOfMines  = 10;

var board = [];

const tileState = {
    'inactive' : 'inactive',
    'active' : 'active',
    'flagged' : 'flagged',
    'undefined' : 'undefined'
}

function initializeBoard(){
    for (let i = 0; i < xSize; i++){

        var boardRow = [];

        for (let j = 0; j < ySize; j++){
            var tile = { 'mine': false, 'state': tileState.inactive};
            boardRow.push(tile);
        }

        board.push(boardRow);
    }
}

initializeBoard();

console.log(board);
