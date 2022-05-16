let a = document.getElementById('caro');

let board = [];
let data = "";
for(let i = 0; i < 5; i++) {
    board[i] = new Array(0,0,0,0,0)
};

for(let i = 0; i < 5; i++) {
    data += '<br>';
    for(j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    };
    
};
data += '<br> <input type="button" value="Change Value" onclick="changeValue()">'
a.innerHTML = data;

function changeValue() {
    let positionX = prompt('X = ' )
    let positionY = prompt('Y = ' )
    data ="";
    board[positionX][positionY] = 'x';
    for(i = 0; i < 5; i++) {
        data += '<br>';
        for(j =0; j < 5; j++) {
            // data += board[i][j] + '&nbsp;&nbsp;';
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        };
        
    };
    data += '<br> <input type="button" value="Change Value" onclick="changeValue()">'
    a.innerHTML = "<hr/>" + data;
    
}
