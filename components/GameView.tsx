import React from 'react';
import { View } from 'react-native';
import BoardView from './BoardView';
import {Puzzle} from './../lib/Puzzles';

interface GameViewProps {
    navigation: any
}

export interface GameParams {
    groupTitle: string,
    puzzle: Puzzle,
    nextPuzzle: Puzzle,
    i: number,
    puzzles: Puzzle[],
    onSolve: () => void
}

export default class GameView extends React.Component<GameViewProps> {
    static navigationOptions = ({ navigation }: any) => {
        return {
            title: navigation.state.params.puzzle.name
        }
    };

    goNextPuzzle() {
        let navigation = this.props.navigation;
        let nextGameParams = {...navigation.state.params};
        nextGameParams.puzzle = nextGameParams.nextPuzzle;
        nextGameParams.i++;
        nextGameParams.nextPuzzle = nextGameParams.puzzles[nextGameParams.i + 1];
        navigation.goBack();
        navigation.push("GameView", nextGameParams)
    }

    goBack() {
        let navigation = this.props.navigation;
        navigation.goBack();
    }

    render() {
        const { navigation } = this.props;
        const gameParams = navigation.state.params;
        return <BoardView gameParams={gameParams} goBack={() => this.goBack()} goNextPuzzle={() => this.goNextPuzzle()} />
    }
}