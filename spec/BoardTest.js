describe("Board", () => {
    let smallBoard = new Board([
        "B  S",
        "  S ",
        "BH  "
    ]);
    let mediumBoard = new Board([
        "B B H",
        "     ",
        "H S S",
        "     ",
        "S H B"
    ]);
    it("has height and width properties", () => {
        expect(smallBoard.height).toEqual(3);
        expect(smallBoard.width).toEqual(4);
    });

    it("has a string representation", () => {
        expect(smallBoard.stringRepresentation).toEqual("B  S  S BH  ");
    });

    it("can find the piece at a given (i, j) coordinate", () => {
        expect(smallBoard.getPieceAt(0, 0)).toEqual("B");
        expect(smallBoard.getPieceAt(1, 2)).toEqual("S");
        expect(smallBoard.getPieceAt(2, 1)).toEqual("H");
        expect(smallBoard.getPieceAt(2, 2)).toEqual(" ");
    });

    it("can find valid moves at a given (i, j) coordinate", () => {
        expect(smallBoard.getMovesFrom(2, 2).length).toEqual(0);
        expect(smallBoard.getMovesFrom(2, 1).length).toEqual(0);

        let topLeftMoves = smallBoard.getMovesFrom(0, 0);
        expect(topLeftMoves.length).toEqual(2);
        expect(topLeftMoves).toEqual(jasmine.arrayContaining([[0, 2], [1, 0]]));

        let bottomLeftMoves = smallBoard.getMovesFrom(2, 0);
        expect(bottomLeftMoves).toEqual([[1, 0]]);

        let topRightMoves = smallBoard.getMovesFrom(0, 3);
        expect(topRightMoves).toEqual([[0, 1]]);

        let middleMoves = smallBoard.getMovesFrom(1, 2);
        expect(middleMoves.length).toEqual(0);

        middleMoves = mediumBoard.getMovesFrom(2, 2);
        expect(middleMoves.length).toEqual(4);
        expect(middleMoves).toEqual(jasmine.arrayContaining([[1, 2], [2, 0], [2, 3], [4, 2]]));

        let bottomRightMoves = mediumBoard.getMovesFrom(4, 4);
        expect(bottomRightMoves.length).toEqual(2);
        expect(bottomRightMoves).toEqual(jasmine.arrayContaining([[4, 3], [3, 4]]));
    });

    it("can perform moves from (i,j) to another spot", () => {
        expect(mediumBoard.move(2, 2, [1, 2]).stringRepresentation).toEqual([
            "B B H",
            "  S  ",
            "H   S",
            "     ",
            "S H B"
        ].join(""));
        expect(mediumBoard.move(2, 2, [2, 0]).stringRepresentation).toEqual([
            "B B H",
            "     ",
            "H   S",
            "     ",
            "S H B"
        ].join(""));
        expect(mediumBoard.move(4, 4, [3, 4]).stringRepresentation).toEqual([
            "B B H",
            "     ",
            "H S S",
            "    B",
            "S H  "
        ].join(""));
    });

    it("can get the set of possible boards from moving piece at (i, j)", () => {
        let possibleBoards = [[
            "B B H",
            "  S  ",
            "H   S",
            "     ",
            "S H B"
        ], [
            "B B H",
            "     ",
            "H  SS",
            "     ",
            "S H B"
        ], [
            "B B H",
            "     ",
            "H   S",
            "     ",
            "S H B"
        ]].map(x => x.join(""));

        let boards = mediumBoard.getBoardsFromMoving(2, 2).map(x => x.stringRepresentation);
        expect(boards.length).toEqual(3);
        expect(boards).toEqual(jasmine.arrayContaining(possibleBoards));
    });

    it("can get all possible moves", () => {
        let possibleBoards = [[
            "  BS",
            "  S ",
            "BH  "
        ], [
            "   S",
            "B S ",
            "BH  "
        ],[
            "BS  ",
            "  S ",
            "BH  "
        ], [
            "B  S",
            "B S ",
            " H  "
        ]].map(x=>x.join(""));

        let allMoves = smallBoard.getAllMoves().map(x => x.stringRepresentation);
        expect(allMoves.length).toEqual(4);
        expect(allMoves).toEqual(jasmine.arrayContaining(possibleBoards));
    });
});