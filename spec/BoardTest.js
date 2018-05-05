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
        expect(smallBoard.pieceAt(0,0)).toEqual("B");
        expect(smallBoard.pieceAt(1, 2)).toEqual("S");
        expect(smallBoard.pieceAt(2, 1)).toEqual("H");
        expect(smallBoard.pieceAt(2, 2)).toEqual(" ");
    });

    it("can find valid moves at a given (i, j) coordinate", () => {
        expect(smallBoard.movesAt(2,2).length).toEqual(0);
        expect(smallBoard.movesAt(2,1).length).toEqual(0);

        let topLeftMoves = smallBoard.movesAt(0,0);
        expect(topLeftMoves.length).toEqual(2);
        expect(topLeftMoves).toEqual(jasmine.arrayContaining([[0,2],[1,0]]));
        
        let bottomLeftMoves = smallBoard.movesAt(2,0);
        expect(bottomLeftMoves).toEqual([[1, 0]]);

        let topRightMoves = smallBoard.movesAt(0, 3);
        expect(topRightMoves).toEqual([[0, 1]]);

        let middleMoves = smallBoard.movesAt(1, 2);
        expect(middleMoves.length).toEqual(0);

        middleMoves = mediumBoard.movesAt(2, 2);
        expect(middleMoves.length).toEqual(4);
        expect(middleMoves).toEqual(jasmine.arrayContaining([[1,2], [2,0], [2,3], [4,2]]));

        let bottomRightMoves = mediumBoard.movesAt(4,4);
        expect(bottomRightMoves.length).toEqual(2);
        expect(bottomRightMoves).toEqual(jasmine.arrayContaining([[4,3],[3,4]]));
    });
});