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

export interface Solution {
    boardsExamined : number;
    solutionsFound : number;
    moves : Board[],
    length: number
}

export default function solveBoard(board: Board) : Solution {
    let movesQueue = [new Move(board)];
    let encounteredMoves : {[key: string] : boolean} = {};
    encounteredMoves[board.stringRepresentation] = true;
    
    let move;
    let firstSolution : Board[] = [];
    let firstSolutionMoves = 0;
    let boardsExamined = 0;
    let solutionsFound = 0;
    while (move = movesQueue.shift()) {
        boardsExamined++;
        if (move.isVictory()) {
            solutionsFound++;
            if(solutionsFound === 1) {
                firstSolution = move.history;
                firstSolutionMoves = move.history.length - 1;
            }
        }
        if(solutionsFound < 1) {
            movesQueue = movesQueue.concat(move.getAllMoves(encounteredMoves));
        }
    }

    return {
        boardsExamined,
        solutionsFound,
        moves: firstSolution,
        length: firstSolutionMoves
    };
}