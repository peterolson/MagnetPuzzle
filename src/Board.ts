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

    public pieceAt(i, j) {
        if (i < 0 || i >= this.height) return;
        return this.pieceMap[i][j];
    }

    public movesAt(i, j) {
        let pieceType = this.pieceAt(i, j);
        // blank spaces and homes cannot move
        if (pieceType === " " || pieceType === "H") return [];

        let moves = [];

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [di, dj] of directions) {
            let ip = i + di, jp = j + dj;
            let currentSquare = this.pieceAt(ip, jp);
            let nextSquare;
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
}