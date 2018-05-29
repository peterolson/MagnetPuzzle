import Board from "./Board";

export interface Puzzle {
    board: Board,
    moves: number,
    text?: string,
    name?: string
}

interface PuzzleList {
    [key: string]: Puzzle[]
}

let puzzles: PuzzleList = {
    learn: [
        {
            board: new Board([
                " S ",
                "   ",
                " H "
            ]),
            moves: 1,
            name: "1 - Going Home",
            text: "The object of the game is to bring everyone home.\n To do that, tap the person, then tap the home."
        },
        {
            board: new Board([
                "S  ",
                "   ",
                "H S"
            ]),
            moves: 2,
            name: "2 - Going Home Together",
            text: "People can only move horizontally and vertically.\n Homes cannot move."
        },
        {
            board: new Board([
                "B  ",
                "  H",
                "   ",
                "S  "
            ]),
            moves: 2,
            name: "3 - Blocks",
            text: "Blocks don't need to go home.\n Pieces move when pulled by other pieces.\n People and blocks can pull each other."
        },
        {
            board: new Board([
                "B  B",
                "   H",
                "  S "
            ]),
            moves: 3,
            name: "4 - Moving Blocks",
            text: "Blocks can pull each other."
        },
        {
            board: new Board([
                "S S",
                "   ",
                "HH "
            ]),
            moves: 3,
            name: "5 - Co-operation",
            text: "People can also pull each other."
        },
        {
            board: new Board([
                "H  ",
                "B B",
                "S  "
            ]),
            moves: 2,
            name: "6 - Obstacles",
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
            name: "7 - Winding Path",
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
            name: "8 - Hi Block! Bye Block!",
            text: "Sometimes you have to pull a block towards yourself before you can move it out of the way."
        },
        {
            board: new Board([
                "  B ",
                "S   ",
                " H B"
            ]),
            moves: 4,
            name: "9 - Homeward Block",
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
            name: "10 - Delayed Gratification",
            text: "Even if you can go home right away, sometimes it's not a good idea."
        },
        {
            board: new Board([
                "S S ",
                "   H",
                "B  B"
            ]),
            moves: 5,
            name: "11 - That's all, folks!",
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
        {   // found by computer
            board: new Board([
                "B  ",
                "  S",
                "SH "]),
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
        },
        {
            board: new Board([
                "S B ",
                " S B",
                " B  ",
                " H  ",
                "  B "
            ]),
            moves: 7
        },
        {
            board: new Board([
                "SSSB",
                " H  "
            ]),
            moves: 6
        },
        {
            board: new Board([
                "B S ",
                "   S",
                " B  ",
                "  H "
            ]),
            moves: 5
        },
        {   // found by computer
            board: new Board([
                "S B",
                "  H",
                "S B"
            ]),
            moves: 6
        },
        {
            board: new Board([
                "  B ",
                "    ",
                "H   ",
                "BB S"
            ]),
            moves: 6
        },
        {   // found by computer
            board: new Board([
                "S S",
                "  S",
                "BHB"
            ]),
            moves: 8
        },
        {
            board: new Board([
                "S B  ",
                "B    ",
                "  BBH",
                " B   "
            ]),
            moves: 7
        },
        {   // found by computer
            board: new Board([
                " H B",
                "B  B",
                " BSS"]),
            moves: 8
        }
    ],
    moderate: [
        {   // among most difficult 3x4 with 1 starts and 3 blocks, found by computer
            board: new Board([
                "S B",
                "  H",
                "   ",
                "BB "
            ]),
            moves: 6
        },
        {
            board: new Board([
                "S B SB",
                " H    ",
                "      ",
                "   B  "
            ]),
            moves: 7
        },
        {   // found by computer
            board: new Board([
                " B S",
                " H  ",
                "SBBB"]),
            moves: 7
        },
        {   // among most difficult 3x4 with 2 starts and 3 blocks, found by computer
            board: new Board([
                "S S",
                "H  ",
                "B  ",
                "B B"
            ]),
            moves: 8
        },
        {   // among most difficult 3x5 with 1 starts and 3 blocks, found by computer
            board: new Board([
                "B S",
                "   ",
                "H  ",
                "   ",
                "B B"
            ]),
            moves: 8
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
        {   // found by computer
            board: new Board([
                "B S",
                "   ",
                "B  ",
                "H  ",
                "   ",
                "B B"
            ]),
            moves: 8
        },
        {   // found by computer
            board: new Board([
                "  SB",
                "H   ",
                "    ",
                " B B"
            ]),
            moves: 8
        },
        {   // among most difficult 3x5 with 1 starts and 3 blocks, found by computer
            board: new Board([
                "  S",
                "H B",
                "   ",
                "B  ",
                "  B"
            ]),
            moves: 8
        },
        {   // found by computer
            board: new Board([
                "  B  ",
                " H  B",
                "SB S "]),
            moves: 8
        },
        {   // found by computer
            board: new Board([
                "  B B",
                "  H B",
                "BS  S"]),
            moves: 8
        },
        {   // found by computer
            board: new Board([
                "B  ",
                "B S",
                "H  ",
                "   ",
                "   ",
                "B B"
            ]),
            moves: 10
        },
        {   // found by computer
            board: new Board([
                "B  S",
                " S S",
                "B H "]),
            moves: 11
        },
        {   // found by computer
            board: new Board([
                "  B ",
                "H   ",
                "   S",
                "B  B"
            ]),
            moves: 9
        },
        {   // found by computer
            board: new Board([
                "B B",
                "  B",
                " B ",
                "H  ",
                "B  ",
                "  S"
            ]),
            moves: 10
        }
    ],
    hard: [
        {   // found by computer
            board: new Board([
                " B S",
                "H   ",
                "    ",
                " B B"
            ]),
            moves: 9
        },
        {   // found by computer
            board: new Board([
                "S B",
                " S ",
                "H  ",
                "  B",
                "   ",
                "   ",
                " B "
            ]),
            moves: 12
        },
        {   // found by computer
            board: new Board([
                "H    ",
                "     ",
                "B  H ",
                "B   S",
                "BB   "]),
            moves: 11
        },
        {   // found by computer
            board: new Board([
                "B  S",
                "H   ",
                "    ",
                "B  B"
            ]).transpose(),
            moves: 11
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
        },
        {   // found by computer
            board: new Board([
                "S S",
                "   ",
                "H  ",
                "   ",
                "  B",
                "B  ",
                "B  "
            ]),
            moves: 14
        },
        {   // among most difficult 4x4 with 2 starts and 2 blocks, found by computer
            board: new Board([
                " H B",
                "S   ",
                "   B",
                "S   "
            ]),
            moves: 10
        },
        {   // found by computer
            board: new Board([
                "B  S",
                "H   ",
                "    ",
                "B  B"]),
            moves: 11
        },
        {   // among most difficult 3x5 with 2 starts and 2 blocks, found by computer
            board: new Board([
                "B S",
                "   ",
                "H  ",
                "   ",
                "B S"
            ]),
            moves: 11
        },
        {   // among most difficult 4x4 with 2 starts and 2 blocks, found by computer
            board: new Board([
                "S  S",
                " H  ",
                "    ",
                " B B"
            ]),
            moves: 10
        },
        {   // found by computer
            board: new Board([
                "   B",
                "  S ",
                " H  ",
                "    ",
                "    ",
                "B BB"
            ]),
            moves: 11
        },
        {
            board: new Board([
                "B  B   B",
                "        ",
                "   H B  ",
                " S    S "
            ]),
            moves: 11
        },
        {   // among most difficult 4x5 with 1 start and 3 blocks, found by computer
            board: new Board([
                " H B",
                "    ",
                "B   ",
                "   B",
                "S   "
            ]),
            moves: 11
        },
        {   // found by computer
            board: new Board([
                "H B B",
                "     ",
                "   H ",
                " S   ",
                "    S"]),
            moves: 12
        },
        {   // found by computer
            board: new Board([
                "S  B",
                "   H",
                "    ",
                "B  B"]),
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
        {   // found by computer
            board: new Board([
                "B H    B",
                "        ",
                "        ",
                "B  S    "]),
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
            moves: 14
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
        {   // among most difficult 4x4 with 2 starts and 3 blocks, found by computer
            board: new Board([
                " H B",
                "   B",
                "S   ",
                "S  B"
            ]),
            moves: 13
        },
        {   // found by computer
            board: new Board([
                "  B B",
                "     ",
                "B H  ",
                "     ",
                " S  S"]),
            moves: 14
        },
        {   // among most difficult 4x4 with 2 starts and 3 blocks, found by computer
            board: new Board([
                "BH B",
                "   B",
                "    ",
                "S  S"
            ]),
            moves: 13
        },
        {   // found by computer
            board: new Board([
                " B  ",
                " B H",
                "    ",
                "B  S",
                "  S "
            ]),
            moves: 14
        },
        {   // among most difficult 4x4 with 3 starts and 2 blocks, found by computer
            board: new Board([
                " H B",
                "   B",
                "S   ",
                " S S"
            ]),
            moves: 14
        },
        {   // among most difficult 4x4 with 3 starts and 2 blocks, found by computer
            board: new Board([
                "BH B",
                "    ",
                "    ",
                "SS S"
            ]),
            moves: 14
        },
        {   // found by computer
            board: new Board([
                " H B",
                "    ",
                "   S",
                "B   ",
                "  SB"
            ]),
            moves: 15
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
        {   // found by computer
            board: new Board([
                "BH  ",
                "B  S",
                "    ",
                "    ",
                "S  B"
            ]),
            moves: 16
        },
        {   // found by computer
            board: new Board([
                "   B ",
                "H    ",
                "     ",
                "BB  B",
                " S   "]),
            moves: 16
        },
        {   // among most difficult 4x4 with 3 starts and 3 blocks, found by computer
            board: new Board([
                " HBB",
                "   S",
                "S  B",
                "  S "
            ]),
            moves: 15
        },
        {   // among most difficult 4x4 with 3 starts and 3 blocks, found by computer
            board: new Board([
                " H B",
                "  BS",
                "S  B",
                "  S "
            ]),
            moves: 15
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
        },
        {   // among most difficult 4x4 with 4 starts and 2 blocks, found by computer
            board: new Board([
                "BH S",
                "   B",
                "    ",
                "S SS"
            ]),
            moves: 17
        },
        {   // among most difficult 4x4 with 4 starts and 3 blocks, found by computer
            board: new Board([
                " H B",
                "B   ",
                "  BS",
                " SSS"
            ]),
            moves: 19
        },
        {   // found by computer
            board: new Board([
                " H B B",
                "      ",
                "B     ",
                "  B  S"]),
            moves: 18
        },
        {   // found by computer
            board: new Board([
                "BB  S",
                "     ",
                "   H ",
                "     ",
                "S   B"]),
            moves: 20
        },
        {   // found by computer
            board: new Board([
                "B  BH ",
                " S    ",
                "     B",
                "S    B"]),
            moves: 22
        },
        {   // found by computer
            board: new Board([
                "B   H ",
                "      ",
                "    BB",
                "S S B "]),
            moves: 22
        }
    ]
}

let names: any = {
    learn: "Learning Puzzle #",
    easy: "Easy Puzzle #",
    moderate: "Moderate Puzzle #",
    hard: "Hard Puzzle #"
}

for (let difficulty in puzzles) {
    let n = 1;
    for (let puzzle of puzzles[difficulty]) {
        puzzle.name = puzzle.name || names[difficulty] + n;
        n++;
    }
}

export default puzzles;