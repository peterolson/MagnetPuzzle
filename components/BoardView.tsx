import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import SquareView from './SquareView';
import ActionPanel from './ActionPanel';
import VictoryModal from './VictoryModal';
import Board, { PieceType, Coord } from './../lib/Board';
import { Puzzle } from './../lib/Puzzles';
import { GameParams } from './GameView';
import { StarType, addSolution, getStarType } from './../lib/SolutionStore';
import { ScaledSize } from 'react-native';


function times(n: number, fn: (i: number) => any) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(i);
    }
    return arr;
}

interface BoardViewProperties {
    gameParams: GameParams,
    goBack: () => void,
    goNextPuzzle: () => void
}
interface BoardViewState {
    activeSquare: Coord,
    possibleMoves: Coord[],
    board: Board,
    history: Board[],
    moveCount: number,
    showVictoryModal: boolean,
    dimensions: ScaledSize
}

export default class BoardView extends React.Component<BoardViewProperties, BoardViewState> {

    constructor(props: BoardViewProperties) {
        super(props);
        this.state = {
            activeSquare: [-1, -1],
            possibleMoves: [],
            board: props.gameParams.puzzle.board,
            history: [props.gameParams.puzzle.board],
            moveCount: 0,
            showVictoryModal: false,
            dimensions: Dimensions.get("window")
        }
        Dimensions.addEventListener("change", this.screenChangeHandler);
    }

    private screenChangeHandler = ({ window }: { window: ScaledSize }) => {
        this.setState({
            dimensions: window
        });
    };

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.screenChangeHandler);
    }

    onTapSquare(i: number, j: number) {
        let pieceType = this.state.board.getPieceAt(i, j);
        if (this.isActive(i, j)) {
            this.deselect();
            return;
        }
        if (this.isPossibleMove(i, j)) {
            this.moveTo(pieceType, i, j);
            return;
        }
        if (pieceType === PieceType.Start || pieceType === PieceType.Block) {
            this.setState({
                activeSquare: [i, j],
                possibleMoves: this.state.board.getMovesFrom(i, j)
            });
            return;
        }
        this.deselect();
    }

    moveTo(pieceType: PieceType, i: number, j: number) {
        let [fromi, fromj] = this.state.activeSquare;
        let board = this.state.board.move(fromi, fromj, [i, j]);
        let history = this.state.history.concat(board);
        let moveCount = this.state.moveCount + 1;
        let activeSquare: Coord = [-1, -1];
        let possibleMoves: Coord[] = [];
        if (pieceType !== PieceType.Home) {
            possibleMoves = board.getMovesFrom(i, j);
            if (possibleMoves.length) {
                activeSquare = [i, j];
            }
        }
        this.setState({
            board,
            activeSquare,
            possibleMoves,
            history,
            moveCount
        });
        if (board.isVictory()) {
            let gameParams = this.props.gameParams;
            let bestMoveCount = gameParams.puzzle.moves;
            addSolution(gameParams.puzzle, {
                moveCount,
                bestMoveCount,
                time: new Date(),
                starType: getStarType(moveCount, bestMoveCount)
            });
            gameParams.onSolve();
            this.showVictoryModal();
        }
    }

    deselect() {
        this.setState({
            activeSquare: [-1, -1],
            possibleMoves: []
        });
    }

    isActive(i: number, j: number) {
        let [ai, aj] = this.state.activeSquare;
        return ai === i && aj === j;
    }

    isPossibleMove(i: number, j: number) {
        for (let [pi, pj] of this.state.possibleMoves) {
            if (i === pi && j === pj) return true;
        }
        return false;
    }

    undo() {
        let history = this.state.history.slice(0, -1);
        if (history.length > 0) {
            let board = history[history.length - 1];
            let moveCount = this.state.moveCount - 1;
            this.setState({ history, board, moveCount });
            this.deselect();
        }
    }

    reset() {
        let board = this.state.history[0];
        let history = [board];
        let moveCount = 0;
        this.setState({ history, board, moveCount });
        this.deselect();
    }

    showVictoryModal() {
        this.setState({
            showVictoryModal: true
        });
    }

    hideVictoryModal() {
        this.setState({
            showVictoryModal: false
        });
        this.reset();
    }

    render() {
        const puzzle = this.props.gameParams.puzzle;
        const { height, width } = this.state.dimensions;
        const isPortrait = height > width;

        let board = this.state.board;
        let boardIsPortrait = board.height > board.width;
        if (!boardIsPortrait) board = board.transpose();

        const rows = board.height;
        const columns = board.width;
        const bottomIndex = isPortrait ? rows - 1 : columns - 1;
        const rightIndex = isPortrait ? columns - 1 : rows - 1;

        let maxHeight, maxWidth;
        let textHeight = puzzle.text ? 70 : 0;
        if (isPortrait) {
            maxHeight = (height - 150 - textHeight) / rows;
            maxWidth = width / columns;
        } else {
            maxHeight = (height - 85 - textHeight) / columns;
            maxWidth = (width - 64) / rows;
        }
        const squareWidth = Math.floor(Math.min(maxHeight, maxWidth));
        return <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            {
                puzzle.text ?
                    <Text style={{ textAlign: "center", fontSize: 16, padding: 5, maxWidth: 400 }}>
                        {puzzle.text}
                    </Text> : null
            }
            <View style={[{ flexDirection: isPortrait ? "column" : "row" }, styles.container]}>
                {
                    times(rows, i =>
                        <View style={[{ flexDirection: isPortrait ? "row" : "column" }, styles.row]} key={'row' + i}>
                            {
                                times(columns, j => {
                                    let [bi, bj] = boardIsPortrait ? [i, j] : [j, i];
                                    return <SquareView key={'square' + i + '_' + j}
                                        width={squareWidth}
                                        isBottom={(isPortrait ? i : j) === bottomIndex}
                                        isRight={(isPortrait ? j : i) === rightIndex}
                                        pieceType={this.state.board.getPieceAt(bi, bj)}
                                        onTap={() => this.onTapSquare(bi, bj)}
                                        isActive={this.isActive(bi, bj)}
                                        isPossibleMove={this.isPossibleMove(bi, bj)} />
                                })
                            }
                        </View>
                    )
                }
                <ActionPanel
                    moveCount={this.state.moveCount}
                    isHorizontal={isPortrait}
                    onUndo={this.undo.bind(this)}
                    onReset={this.reset.bind(this)} />

            </View>
            <VictoryModal isVisible={this.state.showVictoryModal}
                hide={this.hideVictoryModal.bind(this)}
                moveCount={this.state.moveCount}
                {...this.props} />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 2
    },
    row: {
        justifyContent: "center",
        alignItems: "center"
    }
});