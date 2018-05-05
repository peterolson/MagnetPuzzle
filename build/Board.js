var Board = /** @class */ (function () {
    function Board(pieceMap) {
        this.stringRepresentation = pieceMap.join("");
        this.pieceMap = pieceMap.map(function (x) { return x.split(""); });
        this.height = pieceMap.length;
        this.width = pieceMap[0].length;
    }
    Board.prototype.pieceAt = function (i, j) {
        if (i < 0 || i >= this.height)
            return;
        return this.pieceMap[i][j];
    };
    Board.prototype.movesAt = function (i, j) {
        var pieceType = this.pieceAt(i, j);
        // blank spaces and homes cannot move
        if (pieceType === " " || pieceType === "H")
            return [];
        var moves = [];
        var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var _a = directions_1[_i], di = _a[0], dj = _a[1];
            var ip = i + di, jp = j + dj;
            var currentSquare = this.pieceAt(ip, jp);
            var nextSquare = void 0;
            while (nextSquare = this.pieceAt(ip + di, jp + dj)) {
                if (currentSquare !== " ") {
                    if (pieceType === "S" && currentSquare === "H") {
                        moves.push([ip, jp]);
                    }
                    break;
                }
                if (nextSquare !== " ") {
                    if (pieceType === "S" && nextSquare === "H") {
                        moves.push([ip + di, jp + dj]);
                    }
                    else {
                        moves.push([ip, jp]);
                    }
                    break;
                }
                currentSquare = nextSquare;
                ip += di;
                jp += dj;
            }
        }
        return moves;
    };
    return Board;
}());
//# sourceMappingURL=Board.js.map