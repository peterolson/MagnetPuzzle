import Board, { PieceType } from "./lib/Board";
import solveBoard, { Solution } from "./lib/SolveBoard";
import puzzles from "./lib/Puzzles";

// verify that minimum move count is correct 
/*
for (let difficulty in puzzles) {
    for (let puzzle of puzzles[difficulty]) {
        let solution = solveBoard(puzzle.board);
        if (solution && puzzle.moves !== solution.length) {
            console.log("Expected", puzzle.moves, "Actual", solution.length, puzzle.board);
        }
        console.log(puzzle.name, difficultyScore(solution), numberOfUnusedPieces(solution), hasEmptyEdge(puzzle.board));
    }
}*/

function difficultyScore(solution: Solution) {
    let pieceCount = solution.moves[0].getStartCount() + solution.moves[0].getBlockCount();
    return (solution!.length / pieceCount) * Math.log(solution!.boardsExamined)
}

function numberOfUnusedPieces(solution: Solution) {
    let blocks: [number, number, boolean][] = [], firstBoard = solution.moves[0];
    for (let i = 0; i < firstBoard.height; i++) {
        for (let j = 0; j < firstBoard.width; j++) {
            let piece = firstBoard.getPieceAt(i, j);
            if (piece === PieceType.Block) {
                blocks.push([i, j, false]);
            }
        }
    }
    function didBlockMove(i: number, j: number, board: Board) {
        return board.getPieceAt(i, j) !== PieceType.Block;
    }
    let sign = (x: number) => x === 0 ? 0 : x > 0 ? 1 : -1;

    function getFromAndTo(currentBoard: Board, previousBoard: Board) {
        let from: [number, number] = [-1, -1], to: [number, number] = [-1, -1];
        for (let i = 0; i < currentBoard.height; i++) {
            for (let j = 0; j < currentBoard.width; j++) {
                let currentPiece = currentBoard.getPieceAt(i, j);
                let previousPiece = previousBoard.getPieceAt(i, j);
                if (currentPiece !== previousPiece) {
                    if (currentPiece === PieceType.Blank) from = [i, j];
                    else to = [i, j];
                }
            }
        }
        return [from, to];
    }

    function didBlockPull(i: number, j: number, from: [number, number], to: [number, number]) {
        if (from[0] === -1 || to[0] === -1) return false;
        let [sign_i, sign_j] = [sign(to[0] - from[0]), sign(to[1] - from[1])];
        let [next_i, next_j] = [i - sign_i, j - sign_j];
        return to![0] === next_i && to![1] === next_j;
    }

    let previousBoard = firstBoard;
    for (let board of solution.moves) {
        if (board === previousBoard) continue;
        let [from, to] = getFromAndTo(board, previousBoard);
        for (let block of blocks) {
            let [i, j, isUsed] = block;
            if (isUsed) continue;
            if (didBlockMove(i, j, board) || didBlockPull(i, j, from, to)) {
                block[2] = true;
            }
        }
        previousBoard = board;
    }
    return blocks.filter(x => !x[2]).length;
}

function hasEmptyEdge(board: Board) {
    function fill(n: number) {
        let arr = [];
        for (let i = 0; i < n; i++) arr.push(i);
        return arr;
    }
    let isTopEmpty = fill(board.width).filter(i => board.getPieceAt(0, i) !== PieceType.Blank).length === 0;
    let isBottomEmpty = fill(board.width).filter(i => board.getPieceAt(board.height - 1, i) !== PieceType.Blank).length === 0;
    let isLeftEmpty = fill(board.height).filter(i => board.getPieceAt(i, 0) !== PieceType.Blank).length === 0;
    let isRightEmpty = fill(board.height).filter(i => board.getPieceAt(i, board.width - 1) !== PieceType.Blank).length === 0;
    return isTopEmpty || isBottomEmpty || isLeftEmpty || isRightEmpty;
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
function disallowedFromArray(arr: Choice) {
    let dict: NumberDict = {};
    for (let number of arr) dict[number] = true;
    return dict;
}

let startIndex = 0;
let endIndex = 250000;

function generateBoards(width: number, height: number, homes: number, starts: number, blocks: number, homeChoices?: Choice[]) {
    let length = width * height;
    let choices: [Choice, Choice, Choice][] = [];
    let i = 0;
    top:
    for (let homeChoice of homeChoices || choose(length, homes, 0, {})) {
        let disallowed = disallowedFromArray(homeChoice);
        for (let startsChoice of choose(length, starts, 0, disallowed)) {
            let disallowed = disallowedFromArray(homeChoice.concat(startsChoice));
            for (let blocksChoice of choose(length, blocks, 0, disallowed)) {
                if(i >= startIndex) {
                    choices.push([homeChoice, startsChoice, blocksChoice]);
                }
                i++;
                if(i >= endIndex) {
                    break top;
                }
            }
        }
    }
    let board: string[] = [];
    for (let i = 0; i < length; i++) board.push(" ");
    return choices.map(([homesChoice, startsChoice, blocksChoice]) => {
        let boardString = board.slice();
        for (let i of homesChoice) {
            boardString[i] = "H";
        }
        for (let i of startsChoice) {
            boardString[i] = "S";
        }
        for (let i of blocksChoice) {
            boardString[i] = "B";
        }
        let pieceMap = [];
        for (let i = 0; i < length; i += width) {
            pieceMap.push(boardString.slice(i, i + width).join(""));
        }
        return new Board(pieceMap);
    }).filter(board => !hasEmptyEdge(board));
}

function getHomeChoices(width: number, height: number) {
    let choices: number[][] = [];
    for (let i = 0; i < height / 2; i++) {
        for (let j = 0; j <= i && j < width / 2; j++) {
            choices.push([i * width + j]);;
        }
    }
    return choices;
}

let width = 4;
let height = 5;
let maxPieces = width * height - 1;
let maxStarts = Math.min(maxPieces, 3);
let maxBlocks = Math.min(maxPieces, 5);
let homeChoices = getHomeChoices(width, height);
let boards: Board[] = [];
for (let starts = 1; starts <= maxStarts; starts++) {
    for (let blocks = 0; blocks <= maxBlocks && blocks + starts <= maxPieces; blocks++) {
        boards = boards.concat(generateBoards(width, height, 1, starts, blocks, homeChoices))
    }
}

console.log(boards.length + " possible boards");

let i = 0;
let solutionDict: number[] = [];
solutionDict[0] = 0;
let solutions: Solution[] = [];
let difficulties : {[key : string]: boolean} = {};
let difficultyAlreadyCovered = 0;
let boardsWithUselessPieces = 0;
for (let board of boards) {
    i++;

    if (i % 500 === 0) {
        let sortedDifficulties = Object.keys(difficulties).sort((a, b) => +a - +b);
        console.log(solutionDict.map((x, i) => i + ": " + x).join("; "), i + " out of " + boards.length + "\n", 
            boardsWithUselessPieces + " useless", difficultyAlreadyCovered + " duplicate difficulty", solutions.length + " total\n",
            "easiest: " + sortedDifficulties[0], "hardest: " + sortedDifficulties[sortedDifficulties.length - 1]);
    }

    let solution = solveBoard(board);
    if (solution.length > 0) {
        if (numberOfUnusedPieces(solution) > 0) {
            boardsWithUselessPieces++;
            continue;
        }
        let difficulty = difficultyScore(solution).toFixed(4);
        if(difficulties[difficulty]) {
            difficultyAlreadyCovered++;
            continue;
        }
        difficulties[difficulty] = true;
        let moves = solution.length;
        solutionDict[moves] = solutionDict[moves] || 0;
        solutionDict[moves]++;
        solutions.push(solution);
    } else {
        solutionDict[0]++;
    }
}
console.log(solutionDict.map((x, i) => i + ": " + x).join("; "), i + " out of " + boards.length + "\n", 
            boardsWithUselessPieces + " useless", difficultyAlreadyCovered + " duplicate difficulty", solutions.length + " total\n");
console.log("Done");
let scores = solutions.map(solution => difficultyScore(solution)).sort((a,b) => a - b);
console.log(solutions.length, scores[0], scores[scores.length - 1]);

import fs from 'fs';
import path from 'path';
let filePath = path.join(__dirname, 'playground_data');
fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    //if(1) return;
    if (!err) {
        let obj = JSON.parse(data);
        obj = obj.concat(solutions.map(solution => ({
            board: solution.moves[0].pieceMap.map(x => x.join("")),
            width: solution.moves[0].width,
            height: solution.moves[0].height,
            moves: solution.length,
            difficulty: difficultyScore(solution)
        })));
        fs.writeFile(filePath, JSON.stringify(obj), () => {
            console.log("saved.");
        });
    } else {
        console.log(err);
    }
});