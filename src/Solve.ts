function solve(board : Board) {
    
    let movesQueue = [board];

    while(movesQueue.length) {
        let move = movesQueue.shift();
        if(move.isVictory()) {
            return move;
        }
        
    }
    
}