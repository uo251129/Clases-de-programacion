
function redirectTo(link){
    window.location.href = link;
}

function startCustomGame(){
    var rows = $("#row_input").val();
    var columns = $("#column_input").val();
    var mines = $("#mines_input").val();

    redirectTo("src/minesweeper.html?xSize="+rows+"&ySize="+ columns + "&mines=" + mines);
}