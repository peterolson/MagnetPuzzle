class Board {
    public readonly width: number;
    public readonly height: number;
    public readonly stringRepresentation: string;
    private pieceMap: string[][];

    public constructor(pieceMap: string[]) {
        this.stringRepresentation = pieceMap.join("");
        this.pieceMap = pieceMap.map(x => x.split(""));
        this.height = pieceMap.length;
        this.width = pieceMap[0].length;
    }

    public getPieceAt(i, j) {
        if (i < 0 || i >= this.height) return;
        return this.pieceMap[i][j];
    }

    public getMovesFrom(i, j) {
        let pieceType = this.getPieceAt(i, j);
        // blank spaces and homes cannot move
        if (pieceType === " " || pieceType === "H") return [];

        let moves = [];

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [di, dj] of directions) {
            let ip = i + di, jp = j + dj;
            let currentSquare = this.getPieceAt(ip, jp);
            let nextSquare;
            while (currentSquare) {
                if (currentSquare !== " ") {
                    if (pieceType === "S" && currentSquare === "H") {
                        moves.push([ip, jp]);
                    }
                    break;
                }
                nextSquare = this.getPieceAt(ip + di, jp + dj);
                if (nextSquare && nextSquare !== " ") {
                    if (pieceType === "S" && nextSquare === "H") {
                        moves.push([ip + di, jp + dj]);
                    } else {
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
    }

    private cloneMap() {
        return this.pieceMap.slice().map(x => x.slice());
    }

    public move(i, j, destination) {
        let mapCopy = this.cloneMap();
        let fromType = mapCopy[i][j];
        mapCopy[i][j] = " ";
        let [id, jd] = destination;
        let destinationType = mapCopy[id][jd];
        if (destinationType === " ") {
            mapCopy[id][jd] = fromType;
        }
        return new Board(mapCopy.map(x => x.join("")));
    }

    public getBoardsFromMoving(i, j) {
        let destinations = this.getMovesFrom(i, j);
        let possibleBoards : Board[] = [];
        let encounteredBoards = {};
        for (let destination of destinations) {
            let newBoard = this.move(i, j, destination);
            let stringRepresentation = newBoard.stringRepresentation;
            if(!encounteredBoards[stringRepresentation]) {
                possibleBoards.push(newBoard);
                encounteredBoards[stringRepresentation] = true;
            }
        }
        return possibleBoards;
    }

    public getAllMoves() {
        let possibleBoards : Board[] = [];
        for(let i = 0; i < this.height; i++) {
            for(let j = 0; j < this.width; j++) {
                possibleBoards = possibleBoards.concat(this.getBoardsFromMoving(i,j));
            }
        }
        return possibleBoards;
    }

    public isVictory() {
        return this.stringRepresentation.indexOf("S") < 0;
    }

    public toString() {
        return this.stringRepresentation;
    }
}