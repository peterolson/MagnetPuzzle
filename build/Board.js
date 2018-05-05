var Board = /** @class */ (function () {
    function Board(pieceMap) {
        this.stringRepresentation = pieceMap.join("");
        this.pieceMap = pieceMap.map(function (x) { return x.split(""); });
        this.height = pieceMap.length;
        this.width = pieceMap[0].length;
    }
    Board.prototype.getPieceAt = function (i, j) {
        if (i < 0 || i >= this.height)
            return;
        return this.pieceMap[i][j];
    };
    Board.prototype.getMovesFrom = function (i, j) {
        var pieceType = this.getPieceAt(i, j);
        // blank spaces and homes cannot move
        if (pieceType === " " || pieceType === "H")
            return [];
        var moves = [];
        var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var _a = directions_1[_i], di = _a[0], dj = _a[1];
            var ip = i + di, jp = j + dj;
            var currentSquare = this.getPieceAt(ip, jp);
            var nextSquare = void 0;
            while (nextSquare = this.getPieceAt(ip + di, jp + dj)) {
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
    Board.prototype.cloneMap = function () {
        return this.pieceMap.slice().map(function (x) { return x.slice(); });
    };
    Board.prototype.move = function (i, j, destination) {
        var mapCopy = this.cloneMap();
        var fromType = mapCopy[i][j];
        mapCopy[i][j] = " ";
        var id = destination[0], jd = destination[1];
        var destinationType = mapCopy[id][jd];
        if (destinationType === " ") {
            mapCopy[id][jd] = fromType;
        }
        return new Board(mapCopy.map(function (x) { return x.join(""); }));
    };
    Board.prototype.getBoardsFromMoving = function (i, j) {
        var destinations = this.getMovesFrom(i, j);
        var possibleBoards = [];
        var encounteredBoards = {};
        for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
            var destination = destinations_1[_i];
            var newBoard = this.move(i, j, destination);
            var stringRepresentation = newBoard.stringRepresentation;
            if (!encounteredBoards[stringRepresentation]) {
                possibleBoards.push(newBoard);
                encounteredBoards[stringRepresentation] = true;
            }
        }
        return possibleBoards;
    };
    Board.prototype.getAllMoves = function (i, j) {
        var possibleBoards = [];
        for (var i_1 = 0; i_1 < this.height; i_1++) {
            for (var j_1 = 0; j_1 < this.width; j_1++) {
                possibleBoards = possibleBoards.concat(this.getBoardsFromMoving(i_1, j_1));
            }
        }
        return possibleBoards;
    };
    return Board;
}());
//# sourceMappingURL=Board.js.map