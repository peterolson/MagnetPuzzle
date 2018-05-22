import Board from "./Board";

export interface Puzzle {
    board: Board,
    moves: number,
    text?: string,
    name?: string
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
            moves: 1,
            name: "Going Home",
            text: "The object of the game is to bring everyone home. To do that, tap the person, then tap the home."
        },
        {
            board: new Board([
                "S  ",
                "   ",
                "H S"
            ]),
            moves: 2,
            name: "Going Home Together",
            text: "People can only move horizontally and vertically. Homes cannot move."
        },
        {
            board: new Board([
                "B  ",
                "  H",
                "S  "
            ]),
            moves: 2,
            name: "Blocks",
            text: "Blocks can move like people, but they don't need to go home. People and blocks can pull each other."
        },
        {
            board: new Board([
                "B B",
                "  H",
                " S "
            ]),
            moves: 3,
            name: "Moving Blocks",
            text: "Blocks can pull each other."
        },
        {
            board: new Board([
                "S S",
                "   ",
                "HH "
            ]),
            moves: 3,
            name: "Co-operation",
            text: "People can also pull each other."
        },
        {
            board: new Board([
                "H  ",
                "B B",
                "S  "
            ]),
            moves: 2,
            name: "Obstacles",
            text: "Sometimes blocks get in the way."
        },
        {
            board: new Board([
                "SB ",
                "  H",
                "  B",
                "B "
            ]),
            moves: 4,
            name: "Winding Path",
            text: "Sometimes blocks can lead the way."
        },
        {
            board: new Board([
                "S  ",
                "  B",
                "B  ",
                "H  "
            ]),
            moves: 3,
            name: "Hello Block! Goodbye Block!",
            text: "Sometimes you have to pull a block towards yourself before you can move it out of the way."
        },
        {
            board: new Board([
                "  B ",
                "S   ",
                " H B"
            ]),
            moves: 4,
            name: "Homeward Block",
            text: "Homes can pull blocks."
        },
        {
            board: new Board([
                "S  ",
                "   ",
                "S H",
                "   ",
                "B  "
            ]),
            moves: 4,
            name: "Delayed Gratification",
            text: "Even if you can go home right away, sometimes it's not a good idea."
        },
        {
            board: new Board([
                "S S ",
                "   H",
                "B  B"
            ]),
            moves: 6,
            name: "That's all, folks!",
            text: "I think you've got the hang of this now."
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
        },
        {
            board: new Board([
                "  S  ",
                "S   S",
                "S   H",
                "  S  ",
                "S   B",
                "S   S"
            ]),
            moves: 19
        }
    ]
}

let names : any = {
    learn: "Learning Puzzle #",
    easy: "Easy Puzzle #",
    moderate: "Moderate Puzzle #",
    hard: "Hard Puzzle #"
}

for(let difficulty in puzzles) {
    let n = 1;
    for(let puzzle of puzzles[difficulty]) {
        puzzle.name = puzzle.name || names[difficulty] + n;
        n++;
    }
}

export default puzzles;