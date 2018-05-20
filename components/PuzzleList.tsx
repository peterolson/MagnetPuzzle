import React from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import puzzleList from './../lib/Puzzles';

let names : any = {
    learn: "Learning Puzzle #",
    easy: "Easy Puzzle #",
    moderate: "Moderate Puzzle #",
    hard: "Hard Puzzle #"
}

export default class PuzzleList extends React.Component<{navigation: any}> {
    static navigationOptions = ({ navigation } : any) => {
      return {
        title: navigation.state.params.title
      }
    };
    render() {
      const { navigation } = this.props;
      const group = navigation.getParam('group', 'learn');
      const title = navigation.getParam('title', '');
      const puzzles = puzzleList[group];
      return (
        <ScrollView>
            {
                puzzles.map((puzzle, i) => {
                    let name = names[group] + " " + (i + 1)
                    return <ListItem key={i} title={name} subtitle="Not solved yet." rightTitle="star display"
                        onPress={() => this.props.navigation.push("GameView", {title: name, puzzle})} />
                })
            }
        </ScrollView>
      );
    }
  }