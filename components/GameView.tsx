import React from 'react';
import { View } from 'react-native';
import BoardView from './BoardView';

export default class GameView extends React.Component<{ navigation: any }> {
    static navigationOptions = ({ navigation }: any) => {
        return {
            title: navigation.state.params.title
        }
    };
    render() {
        const { navigation } = this.props;
        const board = navigation.getParam('board', null);
        return <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <BoardView board={board} />
        </View>
    }
}