import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import puzzleList from './../lib/Puzzles';
import { StarType, getSolution } from './../lib/SolutionStore';

const images = {
  gold: require("../img/goldsmall.png"),
  silver: require("../img/silversmall.png"),
  bronze: require("../img/bronzesmall.png")
}

function getStarImages(starType: StarType | undefined): any {
  if (starType === StarType.Gold) {
    return [<Image source={images.gold} key="g1" />, <Image source={images.gold} key="g2" />, <Image source={images.gold} key="g3" />]
  }
  if (starType === StarType.Silver) {
    return [<Image source={images.silver} key="s1" />, <Image source={images.silver} key="s2" />]
  }
  if (starType === StarType.Bronze) return <Image source={images.bronze} />
}

function moves(n : any) {
  return n === 1 ? "1 move" : n + " moves";
}

export default class PuzzleList extends React.Component<{ navigation: any }> {
  static navigationOptions = ({ navigation }: any) => {
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
            let nextPuzzle = puzzles[i + 1];
            let solution = getSolution(puzzle);
            let isSolved = solution.moveCount !== undefined;
            let isBest = solution.moveCount === solution.bestMoveCount;
            return <ListItem key={i}
              title={<View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{puzzle.name}</Text>
                <View style={{ position: "absolute", right: 5, top: "50%", flexDirection: "row" }}>
                  {getStarImages(solution.starType)}
                </View>
              </View>}
              subtitle={isSolved ? `You solved in ${moves(solution.moveCount)}. ` + (isBest ? "" : `Can be solved in ${moves(solution.bestMoveCount)}.`) : "Not solved yet."}
              onPress={() => this.props.navigation.push("GameView", { groupTitle: title, puzzle, nextPuzzle, i, puzzles })} />
          })
        }
      </ScrollView>
    );
  }
}