export enum PieceType {
    Home = "H",
    Start = "S",
    Block = "B",
    Blank = " ",
    Undefined = ""
}

export type Coord = [number, number]

export default class Board {
    public readonly width: number;
    public readonly height: number;
    public readonly stringRepresentation: string;
    public readonly pieceMap: PieceType[][];

    public constructor(pieceMap: string[]) {
        this.stringRepresentation = pieceMap.join("");
        this.pieceMap = pieceMap.map(x => <PieceType[]>x.split(""));
        this.height = pieceMap.length;
        this.width = pieceMap[0].length;
    }

    public getPieceAt(i: number, j: number) {
        if (i < 0 || i >= this.height) return PieceType.Undefined;
        return this.pieceMap[i][j];
    }

    public getMovesFrom(i: number, j: number) {
        let pieceType = this.getPieceAt(i, j);
        // blank spaces and homes cannot move
        if (pieceType === " " || pieceType === PieceType.Home) return [];

        let moves: Coord[] = [];

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        for (let [di, dj] of directions) {
            let ip = i + di, jp = j + dj;
            let currentSquare = this.getPieceAt(ip, jp);
            let nextSquare;
            while (currentSquare) {
                if (currentSquare !== " ") {
                    if (pieceType === PieceType.Start && currentSquare === PieceType.Home) {
                        moves.push([ip, jp]);
                    }
                    break;
                }
                nextSquare = this.getPieceAt(ip + di, jp + dj);
                if (nextSquare && nextSquare !== " ") {
                    if (pieceType === PieceType.Start && nextSquare === PieceType.Home) {
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

    public move(i: number, j: number, destination: Coord) {
        let mapCopy = this.cloneMap();
        let fromType = mapCopy[i][j];
        mapCopy[i][j] = PieceType.Blank;
        let [id, jd] = destination;
        let destinationType = mapCopy[id][jd];
        if (destinationType === PieceType.Blank) {
            mapCopy[id][jd] = fromType;
        }
        return new Board(mapCopy.map(x => x.join("")));
    }

    public getBoardsFromMoving(i: number, j: number) {
        let destinations = this.getMovesFrom(i, j);
        let possibleBoards: Board[] = [];
        let encounteredBoards: { [key: string]: boolean } = {};
        for (let destination of destinations) {
            let newBoard = this.move(i, j, destination);
            let stringRepresentation = newBoard.stringRepresentation;
            if (!encounteredBoards[stringRepresentation]) {
                possibleBoards.push(newBoard);
                encounteredBoards[stringRepresentation] = true;
            }
        }
        return possibleBoards;
    }

    public getAllMoves() {
        let possibleBoards: Board[] = [];
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                possibleBoards = possibleBoards.concat(this.getBoardsFromMoving(i, j));
            }
        }
        return possibleBoards;
    }

    public transpose() {
        let newPieceMap = this.pieceMap[0].map(x => new Array(this.height));
        for(let i = 0; i < this.height; i++) {
            for(let j = 0; j < this.width; j++) {
                newPieceMap[j][i] = this.pieceMap[i][j];
            }
        }
        return new Board(newPieceMap.map(x => x.join("")));
    }

    public isVictory() {
        return this.stringRepresentation.indexOf(PieceType.Start) < 0;
    }

    private getPieceCountByType() {
        let counts = {
            [PieceType.Blank]: 0,
            [PieceType.Block]: 0,
            [PieceType.Home]: 0,
            [PieceType.Start]: 0,
            [PieceType.Undefined]: 0
        };
        for(let row of this.pieceMap) {
            for(let cell of row) {
                counts[cell]++;
            }
        }
        return counts;
    }

    public getBlockCount() {
        return this.getPieceCountByType()[PieceType.Block];
    }

    public getStartCount() {
        return this.getPieceCountByType()[PieceType.Start];
    }

    public getHomeCount() {
        return this.getPieceCountByType()[PieceType.Home];
    }

    public getPieceCount() {
        return this.getBlockCount() + this.getStartCount() + this.getHomeCount();
    }

    public toString() {
        return this.stringRepresentation;
    }
}