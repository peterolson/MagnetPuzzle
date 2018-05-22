import Board from "./lib/Board";
import solveBoard from "./lib/SolveBoard";

let board = new Board([
    "SB S",
    "    ",
    "  B ",
    "B  B",
    "  H "
]);

let solution = solveBoard(board);
if(solution) {
    let moveIndex = 0;
    for(let move of solution) {
        let display = "Move #" + moveIndex + "\n";
        for(let i = 0; i < board.height; i++) {
            display += "|";
            for(let j = 0; j < board.width; j++) {
                display += move.getPieceAt(i, j);
            }
            display += "|\n";
        }
        console.log(display);
        moveIndex++;
    }
}

console.log();