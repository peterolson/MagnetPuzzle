import Board from "./../lib/Board";
import solveBoard from "./../lib/SolveBoard";

describe("Solver", () => {
    let boards : {[key: string] : Board} = {
        easy1: new Board([
            "B  ",
            "  B",
            " H ",
            "S  "
        ]),
        easy2: new Board([
            " H  ",
            "S  B",
            "    ",
            "B   ",
            "  B "
        ]),
        mod1: new Board([
            "B   ",
            "S   ",
            "   B",
            "B   ",
            " H  "
        ]),
        mod2: new Board([
            "S B SB",
            " H    ",
            "      ",
            "   B  "
        ]),
        mod3: new Board([
            "S    B ",
            "       ",
            " B    S",
            "   B H "
        ]),
        hard1: new Board([
            "B  B   B",
            "        ",
            "   H B  ",
            " S    S "
        ]),
        hard2: new Board([
            "  S   BS",
            "      BB",
            "B       ",
            "  BH    "
        ]),
        hard3: new Board([
            "SB S",
            "    ",
            "  B ",
            "B  B",
            "  H "
        ]),
        hard4: new Board([
            "SB    S ",
            "BB      ",
            "     B  ",
            "    H  B"
        ]),
        stagnant: new Board([
            "SB H ",
            "     ",
            "   B ",
            "B  S ",
            "S   B"
        ]),
        electron: new Board([
            "B   S ",
            " S    ",
            "   H  ",
            " B   S",
            " BS   "
        ]),
        noCigar: new Board([
            "S   BB ",
            " H     ",
            "       ",
            "  S   S",
            "    B  "
        ]),
        row: new Board([
            "  S    B",
            "        ",
            "H       ",
            "        ",
            "B     B ",
            "B       ",
            "B    B  "
        ])
    };
    let solutionLengths : {[key: string] : number} = {
        easy1: 3,
        easy2: 4,
        mod1: 5,
        mod2: 7,
        mod3: 8,
        hard1: 11,
        hard2: 12,
        hard3: 8,
        hard4: 13,
        stagnant: 11,
        electron: 14,
        noCigar: 13,
        row: 16
    };

    describe("finds solutions in the right number of moves", () => {
        for (let boardName in boards) {
            it("for " + boardName, () => {
                expect(solveBoard(boards[boardName])!.length).toEqual(solutionLengths[boardName]);
            });
        }
    });
});