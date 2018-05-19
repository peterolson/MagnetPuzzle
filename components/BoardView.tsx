import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import SquareView from './SquareView';
import Board from './../lib/Board';

function times(n : number, fn : (i : number) => any) {
    let arr = new Array(n);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = fn(i);
    }
    return arr;
}

export default class BoardView extends React.Component<{board: Board}> {
    render() {
        const {board} = this.props;
        const rows = board.height;
        const columns = board.width;
        const {height, width} = Dimensions.get('window');
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
                                pieceType={board.getPieceAt(i, j)} />
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