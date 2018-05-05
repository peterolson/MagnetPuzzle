class Move {
    public readonly history: Board[];
    public readonly board: Board;

    constructor(board: Board, previousMove?: Move) {
        this.board = board;
        if (previousMove) {
            this.history = previousMove.history.concat(board);
        } else {
            this.history = [board];
        }
    }

    public isVictory() {
        return this.board.isVictory();
    }

    public getAllMoves(encounteredMoves) {
        return this.board.getAllMoves()
            .filter(x => !encounteredMoves[x.stringRepresentation])
            .map(x => {
                encounteredMoves[x.stringRepresentation] = true;
                return new Move(x, this)
            });
    }
}

function solve(board: Board) {

    let movesQueue = [new Move(board)];
    let encounteredMoves = {};
    encounteredMoves[board.stringRepresentation] = true;

    while (movesQueue.length) {
        let move = movesQueue.shift();

        if (move.isVictory()) {
            return move.history;
        }

        movesQueue = movesQueue.concat(move.getAllMoves(encounteredMoves));
    }

    return null;
}