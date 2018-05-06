describe("Solver", () => {
    let boards = {
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
    let solutionLengths = {
        easy1: 4,
        easy2: 5,
        mod1: 6,
        mod2: 8,
        mod3: 9,
        hard1: 12,
        hard2: 13,
        hard3: 9,
        hard4: 14,
        stagnant: 12,
        electron: 15,
        noCigar: 14,
        row: 17
    };

    describe("finds solutions in the right number of moves", () => {
        for (let boardName in boards) {
            it("for " + boardName, () => {
                expect(solve(boards[boardName]).length).toEqual(solutionLengths[boardName]);
            });
        }
    });
});