import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import SquareView from './SquareView';
import Board, { PieceType, Coord } from './../lib/Board';

function times(n: number, fn: (i: number) => any) {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(i);
    }
    return arr;
}

interface BoardViewProperties { board: Board }
interface BoardViewState {
    activeSquare: Coord,
    possibleMoves: Coord[],
    board: Board
}

export default class BoardView extends React.Component<BoardViewProperties, BoardViewState> {

    constructor(props: BoardViewProperties) {
        super(props);
        this.state = {
            activeSquare: [-1, -1],
            possibleMoves: [],
            board: props.board
        }
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
            possibleMoves
        });
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

    render() {
        const board = this.state.board;
        const rows = board.height;
        const columns = board.width;
        const { height, width } = Dimensions.get('window');
        const maxHeight = height / rows;
        const maxWidth = width / columns;
        const squareWidth = Math.floor(Math.min(maxHeight, maxWidth));
        return <View>
            <View style={styles.container}>
                {
                    times(rows, i =>
                        <View style={styles.row} key={'row' + i}>
                            {
                                times(columns, j =>
                                    <SquareView key={'square' + i + '_' + j}
                                        width={squareWidth}
                                        isBottom={i === rows - 1}
                                        isRight={j === columns - 1}
                                        pieceType={board.getPieceAt(i, j)}
                                        onTap={() => this.onTapSquare(i, j)}
                                        isActive={this.isActive(i, j)}
                                        isPossibleMove={this.isPossibleMove(i, j)} />
                                )
                            }
                        </View>
                    )
                }
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    row: {
        flexDirection: 'row'
    }
});