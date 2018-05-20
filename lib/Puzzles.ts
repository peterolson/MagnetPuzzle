import Board from "./Board";

export interface Puzzle {
    board: Board,
    moves: number,
    text?: string
}

interface PuzzleList {
    [key : string] : Puzzle[]
}

let puzzles : PuzzleList = {
    learn: [
        {
            board: new Board([
                " S ",
                "   ",
                " H "
            ]),
            moves: 1
        }
    ],
    easy: [
        {
            board: new Board([
                "B  ",
                "  B",
                " H ",
                "S  "
            ]),
            moves: 3
        },
        {
            board: new Board([
                " H  ",
                "S  B",
                "    ",
                "B   ",
                "  B "
            ]),
            moves: 4
        },
        {
            board: new Board([
                "B   ",
                "S   ",
                "   B",
                "B   ",
                " H  "
            ]),
            moves: 5
        }
    ],
    moderate: [
        {
            board: new Board([
                "S B SB",
                " H    ",
                "      ",
                "   B  "
            ]),
            moves: 7
        },
        {
            board: new Board([
                "S    B ",
                "       ",
                " B    S",
                "   B H "
            ]),
            moves: 8
        },
        {
            board: new Board([
                "SB S",
                "    ",
                "  B ",
                "B  B",
                "  H "
            ]),
            moves: 8
        }
    ],
    hard: [
        {
            board: new Board([
                "B  B   B",
                "        ",
                "   H B  ",
                " S    S "
            ]),
            moves: 11
        },
        {
            board: new Board([
                "  S   BS",
                "      BB",
                "B       ",
                "  BH    "
            ]),
            moves: 12
        },
        {
            board: new Board([
                "SB    S ",
                "BB      ",
                "     B  ",
                "    H  B"
            ]),
            moves: 13
        },
        {
            board: new Board([
                "SB H ",
                "     ",
                "   B ",
                "B  S ",
                "S   B"
            ]),
            moves: 11
        },
        {
            board: new Board([
                "B   S ",
                " S    ",
                "   H  ",
                " B   S",
                " BS   "
            ]),
            moves: 15
        },
        {
            board: new Board([
                "S   BB ",
                " H     ",
                "       ",
                "  S   S",
                "    B  "
            ]),
            moves: 13
        },
        {
            board: new Board([
                "  S    B",
                "        ",
                "H       ",
                "        ",
                "B     B ",
                "B       ",
                "B    B  "
            ]),
            moves: 16
        }
    ]
}

export default puzzles;