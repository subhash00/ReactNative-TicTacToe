export function handleDraw(board) {
    let index = 0;
    
    for (var i = 0; i < board.length; i++) {
     
        if (board[i].value !== "") {
           
            index = index + 1;
            //
        } 
    }
    //console.log(index);

    if (index === 9) {
      //console.log("drawdraw")
        return board[0].value;  
    }
    return null;  
}