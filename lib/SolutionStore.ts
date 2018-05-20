import puzzles, { Puzzle } from "./Puzzles";
import { AsyncStorage } from "react-native";

export enum StarType {
    Gold,
    Silver,
    Bronze
}

export interface Solution {
    moveCount?: number,
    bestMoveCount: number,
    time?: Date,
    starType?: StarType
}

interface SolutionMap {
    [key: string]: Solution
}

let solutionMap: SolutionMap = {};
for (let difficulty in puzzles) {
    for (let puzzle of puzzles[difficulty]) {
        solutionMap[puzzle.board.stringRepresentation] = {
            bestMoveCount: puzzle.moves
        };
    }
}

// load from data store
AsyncStorage.multiGet(Object.keys(solutionMap), (err, results) => {
    if (results) {
        for (let [key, value] of results) {
            let solution = JSON.parse(value);
            if(solution) {
                solutionMap[key] = solution;
            }
        }
    }
});

export function getSolution(puzzle : Puzzle) {
    return solutionMap[puzzle.board.stringRepresentation];
}

export function addSolution(puzzle : Puzzle, solution : Solution) {
    let currentSolution = getSolution(puzzle);
    let canAdd = !currentSolution.moveCount || (solution.moveCount && solution.moveCount < currentSolution.moveCount);
    if(canAdd) {
        let key = puzzle.board.stringRepresentation;
        solutionMap[key] = solution;
        AsyncStorage.setItem(key, JSON.stringify(solution));
    }
}