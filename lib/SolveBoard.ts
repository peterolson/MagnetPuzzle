import Board from "./Board";

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

    public getAllMoves(encounteredMoves : {[key: string] : boolean}) {
        return this.board.getAllMoves()
            .filter(x => !encounteredMoves[x.stringRepresentation])
            .map(x => {
                encounteredMoves[x.stringRepresentation] = true;
                return new Move(x, this)
            });
    }
}

export default function solveBoard(board: Board) {

    let movesQueue = [new Move(board)];
    let encounteredMoves : {[key: string] : boolean} = {};
    encounteredMoves[board.stringRepresentation] = true;

    while (movesQueue.length) {
        let move = movesQueue.shift();

        if (move!.isVictory()) {
            return move!.history;
        }

        movesQueue = movesQueue.concat(move!.getAllMoves(encounteredMoves));
    }

    return null;
}