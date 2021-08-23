var xSize = findGetParameter("xSize");
var ySize = findGetParameter("ySize");
var numberOfMines = findGetParameter("mines");

var board = [];

// Example of an enumerator
const tileState = {
    'inactive' : 'inactive',
    'active' : 'active',
    'flagged' : 'flagged',
    'undefined' : 'undefined'
}

$(document).ready(function(){
    initializeBoard(); 
    setMines2();
    console.log(board);
    drawBoard();
});

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

//Works, but is inefficient. For large boards with high mine density, it could take a lot of time to finish.
function setMines1(){
    for (let i = 0; i < numberOfMines; i++){
        var randomX = getRandomInt(0, xSize);
        var randomY = getRandomInt(0, ySize);
        if (board[randomX][randomY].mine == false){
            board[randomX][randomY].mine = true;
        } else {
            i--;
        }
    }
}

// Most efficient alternative!
function setMines2(){
    unminedTile = [];

    for (let i = 0; i < xSize; i++){
        for (let j = 0; j < ySize; j++){
            unminedTile.push({'x': i, 'y': j});
        } 
    }

    for (let i = 0; i < numberOfMines; i++){
        var selectedCoorIndex = getRandomInt(0, unminedTile.length);
        var selectedCoor = unminedTile[selectedCoorIndex];
        board[selectedCoor.x][selectedCoor.y].mine = true;
        unminedTile.splice(selectedCoorIndex, 1);
    }
}

function drawBoard(){
    var boardHTML = "";

    for (let i = 0; i < xSize; i++){
        boardHTML += "<div class='row'>"
        for (let j = 0; j < ySize; j++){
            boardHTML += "<div onclick='tileOnClick("+i+", "+j+")'" + "class='tile "+board[i][j].state+ " number"+ board[i][j].neighborMines +  "'>"
            if (board[i][j].state == tileState.active){
                if (board[i][j].mine == false){
                    boardHTML += board[i][j].neighborMines;
                } else {
                    boardHTML += "<img src='/resources/bomb_icon.png'>"
                }
            }
            boardHTML += "</div>"
        }
        boardHTML += "</div>"
    }
                                
    $('#board').html(boardHTML);
}

function tileOnClick(x, y){
    var tile = board[x][y];
    if (tile.state == tileState.inactive || tile.state == tileState.undefined){
        tile.state = tileState.active;
        if(tile.mine){
            alert("Boom! You dead");
        } else {
            calculateNeighborMines(x, y);
        }
    }
    drawBoard();
}

function calculateNeighborMines_ugly(x, y){
    var minedTiles = []
    if(x != 0 && y != 0){
        if (board[x-1][y-1].mine){
            minedTiles.push({'x':x-1, 'y':y-1});
        }
    }
    if (y != 0){
        if (board[x][y - 1].mine){
            minedTiles.push({'x':x, 'y':y-1});
        }
    }

    if(x != xSize - 1 && y != 0){
        if (board[x + 1][y-1].mine){
            minedTiles.push({'x':x + 1, 'y':y-1});
        }
    }
    
    if(x != 0){
        if (board[x - 1][y].mine){
            minedTiles.push({'x':x-1, 'y':y});
        }
    }

    if(x != xSize - 1){
        if (board[x + 1][y].mine){
            minedTiles.push({'x':x + 1, 'y':y});
        }
    } 

    if(x != 0 && y != ySize - 1){
        if (board[x - 1][y + 1].mine){
            minedTiles.push({'x':x - 1, 'y':y + 1});
        }
    }

    if(y != ySize - 1){
        if (board[x][y + 1].mine){
            minedTiles.push({'x':x, 'y':y + 1});
        }
    }

    if(x != xSize - 1 && y != ySize - 1){
        if (board[x + 1][y + 1].mine){
            minedTiles.push({'x':x + 1, 'y':y + 1});
        }
    }

    board[x][y].neighborMines = minedTiles.length

}

function calculateNeighborMines(x, y){

    var numberOfMines = 0;

    for (let xmod = -1; xmod <= 1; xmod++){
        for (let ymod = -1; ymod <= 1; ymod++){
            if (x + xmod >= 0 && x + xmod < board.length && y + ymod >= 0 && y + ymod < board[0].length){
                if (board[x + xmod][y + ymod].mine){
                    numberOfMines++;
                }
            }
        }
    }

    board[x][y].neighborMines = numberOfMines;
}