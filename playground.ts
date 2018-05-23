import Board from "./lib/Board";
import solveBoard from "./lib/SolveBoard";

let board = new Board([
    "SB S",
    "    ",
    "  B ",
    "B  B",
    "  H "
]);

function displaySolution(solution: Board[] | null) {
    if (solution) {
        let moveIndex = 0;
        for (let move of solution) {
            let display = "Move #" + moveIndex + "\n";
            for (let i = 0; i < board.height; i++) {
                display += "|";
                for (let j = 0; j < board.width; j++) {
                    display += move.getPieceAt(i, j);
                }
                display += "|\n";
            }
            console.log(display);
            moveIndex++;
        }
    }
    console.log("No solution");
}

type NumberDict = { [key: number]: boolean };
type Choice = number[];
function choose(length: number, n: number, i: number, disallowed: NumberDict) {
    let choices: Choice[] = [];
    if (n === 1) {
        while (i < length) {
            if (disallowed[i]) { i++; continue; }
            choices.push([i]);
            i++;
        }
    }
    while (i < length) {
        if (disallowed[i]) { i++; continue; }
        choices = choices.concat(choose(length, n - 1, i + 1, disallowed).map(x => [i].concat(x)));
        i++;
    }
    return choices;
}
function disallowedFromArray(arr : Choice) {
    let dict : NumberDict = {};
    for(let number of arr) dict[number] = true;
    return dict;
}

function generateBoards(width: number, height: number, homes: number, starts: number, blocks: number, homeChoices?: Choice[]) {
    let length = width * height;
    let choices : [Choice, Choice, Choice][] = [];
    for(let homeChoice of homeChoices || choose(length, homes, 0, {})) {
        let disallowed = disallowedFromArray(homeChoice);
        for(let startsChoice of choose(length, starts, 0, disallowed)) {
            let disallowed = disallowedFromArray(homeChoice.concat(startsChoice));
            for(let blocksChoice of choose(length, blocks, 0, disallowed)) {
                choices.push([homeChoice, startsChoice, blocksChoice]);
            }
        }
    }
    let board : string[] = [];
    for(let i = 0; i < length; i++) board.push(" ");
    return choices.map(([homesChoice, startsChoice, blocksChoice]) => {
        let boardString = board.slice();
        for(let i of homesChoice) {
            boardString[i] = "H";
        }
        for(let i of startsChoice) {
            boardString[i] = "S";
        }
        for(let i of blocksChoice) {
            boardString[i] = "B";
        }
        let pieceMap = [];
        for(let i = 0; i < length; i+= width) {
            pieceMap.push(boardString.slice(i, i + width).join(""));
        }
        return new Board(pieceMap);
    });
}

let boards = generateBoards(3,5,1,2,2, [[1],[3],[4],[6],[7]]);
let i = 0;
let solutionDict : Board[][] = [];
solutionDict[0] = [];
for(let board of boards) {
    i++;
    let solution = solveBoard(board);
    if(solution) {
        let moves = solution.length - 1;
        solutionDict[moves] = solutionDict[moves] || [];
        solutionDict[moves].push(board);
    } else {
        solutionDict[0].push(board);
    }
    if(i % 1000 === 0) {
        console.log(i, boards.length, solutionDict.map((x, i) => i + ": " + x.length));
    }
}

console.log("Best boards solution length: " + (solutionDict.length - 1));
let bestBoards = solutionDict[solutionDict.length - 1];
console.log(bestBoards.map(board => board.pieceMap.map(row => row.join("")).join("\n")).join("\n\n---\n\n"));