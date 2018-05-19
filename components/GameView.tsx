import React from 'react';
import { View } from 'react-native';
import BoardView from './BoardView';
import ActionPanel from './ActionPanel';
import Board from './../lib/Board';

let mediumBoard = new Board([
  "SB    S ",
  "BB      ",
  "     B  ",
  "    H  B"
]);

export default class GameView extends React.Component {
    render() {
        return <View style={{flexDirection: "column"}}>
            <BoardView board={mediumBoard} />
        </View>
    }
}