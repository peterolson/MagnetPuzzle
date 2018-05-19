import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import SquareView from './SquareView';

export default class BoardView extends React.Component {
    render() {
        const board = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];
        const rows = board.length;
        const columns = board[0].length;
        const {height, width} = Dimensions.get('window');
        const maxHeight = height / rows;
        const maxWidth = width / columns;
        const squareWidth = Math.floor(Math.min(maxHeight, maxWidth));
        return <View>
            <View style={styles.container}>
            {
                board.map((row, i) =>
                    <View style={styles.row} key={'row' + i}>
                    {
                        row.map((square, j) => 
                            <SquareView key={'square' + i + '_' + j} 
                                width={squareWidth} 
                                isBottom={i === rows - 1} 
                                isRight={j === columns - 1} />
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