function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}



console.log(location.search)

var xSize = findGetParameter("xSize");
var ySize = findGetParameter("ySize");
var numberOfMines = findGetParameter("mines");

var board = [];

const tileState = {
    'inactive' : 'inactive',
    'active' : 'active',
    'flagged' : 'flagged',
    'undefined' : 'undefined'
}
function redirectTo(link){
    window.location.href = link;
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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

function updateBoard(){
    var boardHTML = "";

    for (let i = 0; i < xSize; i++){
        boardHTML += "<div class='row'>"
        for (let j = 0; j < ySize; j++){
            boardHTML += "<div onclick=\"console.log('Pressed tile on position ("+ i +", " + j + ")')\" class='tile'></div>"
        }
        boardHTML += "</div>"
    }

    $('#board').html(boardHTML);
}

$(document).ready(function(){
    updateBoard();
});


initializeBoard(); 

setMines2();

console.log(board);

// ?parameter1=124&parameter2=254 ejemplo sobre como introducir parametros en una pagina 

$('#xSize').val() 
$('#ySize').val() 
$('#mines').val() 