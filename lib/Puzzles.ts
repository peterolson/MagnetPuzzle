import Board from "./Board";

export interface Puzzle {
    board: Board,
    moves: number,
    text?: string,
    name?: string,
    difficulty?: number
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
            text: "Pieces move when pulled by other pieces.\n People and blocks can pull each other."
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
    "easy": [
        {
            "board": new Board([
                "HBS",
                "   ",
                "   ",
                "   ",
                " B "
            ]),
            "moves": 2,
            "difficulty": 0.9241962407465937
        },
        {
            "board": new Board([
                " B",
                "H ",
                " S"
            ]),
            "moves": 2,
            "difficulty": 1.3862943611198906
        },
        {
            "board": new Board([
                "  B",
                "H  ",
                "  S"
            ]),
            "moves": 2,
            "difficulty": 1.6094379124341003
        },
        {
            "board": new Board([
                "B  ",
                "  B",
                " H ",
                "S  "
            ]),
            "moves": 3,
            "difficulty": 1.791759469228055
        },
        {
            "board": new Board([
                " H  ",
                "S  B",
                "    ",
                "B   ",
                "  B "
            ]),
            "moves": 4,
            "difficulty": 2.772588722239781
        },
        {
            "board": new Board([
                "  B",
                "H  ",
                "S S"
            ]),
            "moves": 3,
            "difficulty": 2.9444389791664403
        },
        {
            "board": new Board([
                "B  ",
                "  S",
                "SH "
            ]),
            "moves": 4,
            "difficulty": 3.5187431061536776
        },
        {
            "board": new Board([
                "SSSB",
                " H  "
            ]),
            "moves": 6,
            "difficulty": 3.596842909197556
        },
        {
            "board": new Board([
                "B   ",
                "S   ",
                "   B",
                "B   ",
                " H  "
            ]),
            "moves": 5,
            "difficulty": 3.972567287934932
        },
        {
            "board": new Board([
                "B S ",
                "   S",
                " B  ",
                "  H "
            ]),
            "moves": 5,
            "difficulty": 4.332169878499658
        },
        {
            "board": new Board([
                " B S",
                " H  ",
                "SBBB"
            ]),
            "moves": 7,
            "difficulty": 4.414887906237971
        },
        {
            "board": new Board([
                "  B",
                "H  ",
                "  B",
                "   ",
                "B S"
            ]),
            "moves": 4,
            "difficulty": 4.59511985013459
        },
        {
            "board": new Board([
                "  B ",
                "    ",
                "H   ",
                "BB S"
            ]),
            "moves": 6,
            "difficulty": 4.9983067652628055
        },
        {
            "board": new Board([
                "S B",
                "  H",
                "   ",
                "BB "
            ]),
            "moves": 6,
            "difficulty": 5.15098080672772
        },
        {
            "board": new Board([
                "S B  ",
                "B    ",
                "  BBH",
                " B   "
            ]),
            "moves": 7,
            "difficulty": 5.604691218855467
        },
        {
            "board": new Board([
                "S B ",
                " S B",
                " B  ",
                " H  ",
                "  B "
            ]),
            "moves": 7,
            "difficulty": 5.891498675124461
        },
        {
            "board": new Board([
                "S B",
                "  H",
                "S B"
            ]),
            "moves": 6,
            "difficulty": 6.14151684333315
        },
        {
            "board": new Board([
                "B S",
                "   ",
                " HS",
                "   ",
                "S B"
            ]),
            "moves": 5,
            "difficulty": 6.263398262591624
        },
        {
            "board": new Board([
                "  B  ",
                " H  B",
                "SB S "
            ]),
            "moves": 8,
            "difficulty": 6.629015562226453
        },
        {
            "board": new Board([
                "S S",
                "  S",
                "BHB"
            ]),
            "moves": 8,
            "difficulty": 6.907980981658096
        }
    ],
    "moderate": [
        {
            "board": new Board([
                "S B SB",
                " H    ",
                "      ",
                "   B  "
            ]),
            "moves": 7,
            "difficulty": 7.0148894117347576
        },
        {
            "board": new Board([
                "  SB",
                "H   ",
                "    ",
                " B B"
            ]),
            "moves": 8,
            "difficulty": 7.475339236566737
        },
        {
            "board": new Board([
                "B  ",
                " H ",
                "S S",
                "   ",
                "B S"
            ]),
            "moves": 6,
            "difficulty": 7.796129988223035
        },
        {
            "board": new Board([
                "  B ",
                "H   ",
                "   S",
                "B  B"
            ]),
            "moves": 9,
            "difficulty": 7.86714201329958
        },
        {
            "board": new Board([
                "  S",
                "H B",
                "   ",
                "B  ",
                "  B"
            ]),
            "moves": 8,
            "difficulty": 8.496990484098719
        },
        {
            "board": new Board([
                "S    B ",
                "       ",
                " B    S",
                "   B H "
            ]),
            "moves": 8,
            "difficulty": 8.50112956646686
        },
        {
            "board": new Board([
                "B S",
                "   ",
                "B  ",
                "H  ",
                "   ",
                "B B"
            ]),
            "moves": 8,
            "difficulty": 8.986833756266515
        },
        {
            "board": new Board([
                " B S",
                "H   ",
                "    ",
                "B SB"
            ]),
            "moves": 7,
            "difficulty": 9.173511041848425
        },
        {
            "board": new Board([
                "B B",
                "  B",
                " B ",
                "H  ",
                "B  ",
                "  S"
            ]),
            "moves": 10,
            "difficulty": 9.665154424100876
        },
        {
            "board": new Board([
                "B S",
                "   ",
                "H  ",
                "   ",
                "B B"
            ]),
            "moves": 8,
            "difficulty": 9.83996185165625
        },
        {
            "board": new Board([
                "B  ",
                "B S",
                "H  ",
                "   ",
                "   ",
                "B B"
            ]),
            "moves": 10,
            "difficulty": 10.125190066053934
        },
        {
            "board": new Board([
                "H    ",
                "     ",
                "B  H ",
                "B   S",
                "BB   "
            ]),
            "moves": 11,
            "difficulty": 10.280223435816193
        },
        {
            "board": new Board([
                " B S",
                "H   ",
                "    ",
                " B B"
            ]),
            "moves": 9,
            "difficulty": 10.428140223516682
        },
        {
            "board": new Board([
                "SB S",
                "    ",
                "  B ",
                "B  B",
                "  H "
            ]),
            "moves": 8,
            "difficulty": 10.682690985545415
        },
        {
            "board": new Board([
                "B  S",
                " S S",
                "B H "
            ]),
            "moves": 11,
            "difficulty": 10.807840748619316
        },
        {
            "board": new Board([
                "S B",
                " S ",
                "H  ",
                "  B",
                "   ",
                "   ",
                " B "
            ]),
            "moves": 12,
            "difficulty": 10.903907477448008
        },
        {
            "board": new Board([
                "   B",
                "  S ",
                " H  ",
                "    ",
                "    ",
                "B BB"
            ]),
            "moves": 11,
            "difficulty": 11.008681873080011
        },
        {
            "board": new Board([
                " S B",
                "H   ",
                "   S",
                "BS B"
            ]),
            "moves": 8,
            "difficulty": 11.269210299623476
        },
        {
            "board": new Board([
                " H B",
                "S   ",
                "   B",
                "S   "
            ]),
            "moves": 10,
            "difficulty": 11.304471442622601
        },
        {
            "board": new Board([
                "S  S",
                " H  ",
                "    ",
                " B B"
            ]),
            "moves": 10,
            "difficulty": 11.634900875393807
        }
    ],
    "hard": [
        {
            "board": new Board([
                "S  B",
                "   H",
                "    ",
                "B  B"
            ]),
            "moves": 11,
            "difficulty": 12.184746196819113
        },
        {
            "board": new Board([
                "B  S",
                "H   ",
                "    ",
                "B  B"
            ]),
            "moves": 11,
            "difficulty": 12.184746196819113
        },
        {
            "board": new Board([
                " H B",
                "    ",
                "B   ",
                "   B",
                "S   "
            ]),
            "moves": 11,
            "difficulty": 12.281247326300106
        },
        {
            "board": new Board([
                "B S",
                "   ",
                "H B",
                "   ",
                "B S"
            ]),
            "moves": 9,
            "difficulty": 13.116377541151259
        },
        {
            "board": new Board([
                " B  ",
                " B H",
                "    ",
                "B  S",
                "  S "
            ]),
            "moves": 14,
            "difficulty": 13.816527012765935
        },
        {
            "board": new Board([
                "B H    B",
                "        ",
                "        ",
                "B  S    "
            ]),
            "moves": 12,
            "difficulty": 13.904186964688908
        },
        {
            "board": new Board([
                "B S",
                "   ",
                "H  ",
                "   ",
                "B S"
            ]),
            "moves": 11,
            "difficulty": 13.922136340824158
        },
        {
            "board": new Board([
                "B  B   B",
                "        ",
                "   H B  ",
                " S    S "
            ]),
            "moves": 11,
            "difficulty": 14.040949190158548
        },
        {
            "board": new Board([
                " HBB",
                "   S",
                "S  B",
                "  S "
            ]),
            "moves": 15,
            "difficulty": 14.317119368967992
        },
        {
            "board": new Board([
                "S S",
                "   ",
                "H  ",
                "   ",
                "  B",
                "B  ",
                "B  "
            ]),
            "moves": 14,
            "difficulty": 14.412984535077667
        },
        {
            "board": new Board([
                " S B",
                "H  B",
                "    ",
                "B SS"
            ]),
            "moves": 10,
            "difficulty": 14.489719941791156
        },
        {
            "board": new Board([
                " H B",
                "   B",
                "S   ",
                "S  B"
            ]),
            "moves": 13,
            "difficulty": 14.668958384439096
        },
        {
            "board": new Board([
                "SB H ",
                "     ",
                "   B ",
                "B  S ",
                "S   B"
            ]),
            "moves": 11,
            "difficulty": 15.319024018994957
        },
        {
            "board": new Board([
                "H B B",
                "     ",
                "   H ",
                " S   ",
                "    S"
            ]),
            "moves": 12,
            "difficulty": 15.562157417522265
        },
        {
            "board": new Board([
                "BH B",
                "   B",
                "    ",
                "S  S"
            ]),
            "moves": 13,
            "difficulty": 15.765841542587781
        },
        {
            "board": new Board([
                " S S",
                "H  B",
                "    ",
                "BB S"
            ]),
            "moves": 11,
            "difficulty": 15.780232342054372
        },
        {
            "board": new Board([
                "B  S",
                "H   ",
                "BB B",
                " S S"
            ]),
            "moves": 15,
            "difficulty": 16.88338481206528
        },
        {
            "board": new Board([
                "  B B",
                "     ",
                "B H  ",
                "     ",
                " S  S"
            ]),
            "moves": 14,
            "difficulty": 16.906038575781984
        },
        {
            "board": new Board([
                " H B",
                "   B",
                "S   ",
                " S S"
            ]),
            "moves": 14,
            "difficulty": 17.049325651251166
        },
        {
            "board": new Board([
                "B  S",
                "H  S",
                "    ",
                "B  S"
            ]),
            "moves": 14,
            "difficulty": 17.209721921472912
        },
        {
            "board": new Board([
                "  B ",
                "HBB ",
                " S B",
                "BSS "
            ]),
            "moves": 26,
            "difficulty": 17.283889979993702
        },
        {
            "board": new Board([
                " S S",
                "H  B",
                "    ",
                "B BS"
            ]),
            "moves": 12,
            "difficulty": 17.326047279255555
        },
        {
            "board": new Board([
                " S S",
                "H   ",
                "   B",
                " B S"
            ]),
            "moves": 13,
            "difficulty": 17.779853522203094
        },
        {
            "board": new Board([
                "   B ",
                "H    ",
                "     ",
                "BB  B",
                " S   "
            ]),
            "moves": 16,
            "difficulty": 17.8791957068808
        },
        {
            "board": new Board([
                "  B ",
                "HB  ",
                " SBB",
                "BSS "
            ]),
            "moves": 27,
            "difficulty": 17.94865497922423
        }
    ],
    "insane": [
        {
            "board": new Board([
                "B  S",
                "H   ",
                "B BB",
                " S S"
            ]),
            "moves": 16,
            "difficulty": 18.0089437995363
        },
        {
            "board": new Board([
                "B   S ",
                " S    ",
                "   H  ",
                " B   S",
                " BS   "
            ]),
            "moves": 14,
            "difficulty": 18.187837817917863
        },
        {
            "board": new Board([
                " S S",
                "H BB",
                " B  ",
                "B  S"
            ]),
            "moves": 17,
            "difficulty": 18.289611092189222
        },
        {
            "board": new Board([
                " H B",
                "    ",
                "   S",
                "B   ",
                "  SB"
            ]),
            "moves": 15,
            "difficulty": 18.413181162258702
        },
        {
            "board": new Board([
                "  B ",
                "H B ",
                " SBB",
                "BSS "
            ]),
            "moves": 28,
            "difficulty": 18.647566590763535
        },
        {
            "board": new Board([
                "B  B",
                "H B ",
                " B  ",
                "BSSS"
            ]),
            "moves": 22,
            "difficulty": 18.88978973933069
        },
        {
            "board": new Board([
                " B B",
                "HB  ",
                " B  ",
                "BSSS"
            ]),
            "moves": 21,
            "difficulty": 19.104588753982362
        },
        {
            "board": new Board([
                "S  B",
                "HBB ",
                "    ",
                "B SS"
            ]),
            "moves": 18,
            "difficulty": 19.127271934399648
        },
        {
            "board": new Board([
                " H B",
                "B   ",
                "  BS",
                " SSS"
            ]),
            "moves": 19,
            "difficulty": 19.36829422764782
        },
        {
            "board": new Board([
                "  S    B",
                "        ",
                "H       ",
                "        ",
                "B     B ",
                "B       ",
                "B    B  "
            ]),
            "moves": 16,
            "difficulty": 19.53365712649529
        },
        {
            "board": new Board([
                "  BB",
                "H B ",
                "  B ",
                "BSSS"
            ]),
            "moves": 24,
            "difficulty": 19.610074792773915
        },
        {
            "board": new Board([
                "S   BB ",
                " H     ",
                "       ",
                "  S   S",
                "    B  "
            ]),
            "moves": 13,
            "difficulty": 19.66691463676715
        },
        {
            "board": new Board([
                "S  B",
                "HBB ",
                "    ",
                "BS S"
            ]),
            "moves": 19,
            "difficulty": 20.189898152977406
        },
        {
            "board": new Board([
                "BH  ",
                "B  S",
                "    ",
                "    ",
                "S  B"
            ]),
            "moves": 16,
            "difficulty": 20.260805919659813
        },
        {
            "board": new Board([
                "  B ",
                "HB B",
                "  BS",
                "BS S"
            ]),
            "moves": 24,
            "difficulty": 20.4005102049066
        },
        {
            "board": new Board([
                "BH S",
                "   B",
                "    ",
                "S SS"
            ]),
            "moves": 17,
            "difficulty": 20.745240855733677
        },
        {
            "board": new Board([
                " S B",
                "HB  ",
                "  B ",
                "BS S"
            ]),
            "moves": 20,
            "difficulty": 21.006974572124523
        },
        {
            "board": new Board([
                " B B",
                "H   ",
                " BB ",
                "BSSS"
            ]),
            "moves": 23,
            "difficulty": 21.160298922343813
        },
        {
            "board": new Board([
                " B B",
                "HB  ",
                " SB ",
                "BS S"
            ]),
            "moves": 25,
            "difficulty": 22.00441144935878
        },
        {
            "board": new Board([
                " B B",
                "HB  ",
                "  B ",
                "BSSS"
            ]),
            "moves": 24,
            "difficulty": 22.080311918967457
        },
        {
            "board": new Board([
                " H B B",
                "      ",
                "B     ",
                "  B  S"
            ]),
            "moves": 18,
            "difficulty": 24.54419005723494
        },
        {
            "board": new Board([
                "BB  S",
                "     ",
                "   H ",
                "     ",
                "S   B"
            ]),
            "moves": 20,
            "difficulty": 25.347302924585765
        },
        {
            "board": new Board([
                "B  BH ",
                " S    ",
                "     B",
                "S    B"
            ]),
            "moves": 22,
            "difficulty": 25.80887298509132
        },
        {
            "board": new Board([
                "  S  ",
                "S   S",
                "S   H",
                "  S  ",
                "S   B",
                "S   S"
            ]),
            "moves": 19,
            "difficulty": 29.166077844591246
        },
        {
            "board": new Board([
                "B   H ",
                "      ",
                "    BB",
                "S S B "
            ]),
            "moves": 22,
            "difficulty": 29.731618650633514
        }
    ]
}

let names: any = {
    learn: "Learning Puzzle #",
    easy: "Easy Puzzle #",
    moderate: "Moderate Puzzle #",
    hard: "Hard Puzzle #",
    insane: "Insane Puzzle #"
}

for (let difficulty in puzzles) {
    let n = 1;
    for (let puzzle of puzzles[difficulty]) {
        puzzle.name = puzzle.name || names[difficulty] + n;
        n++;
    }
}

export default puzzles;