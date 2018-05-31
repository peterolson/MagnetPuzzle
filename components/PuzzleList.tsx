import React from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import puzzleList from './../lib/Puzzles';
import { StarType, getSolution } from './../lib/SolutionStore';
import images from '../img/images';

function getStarImages(starType: StarType | undefined): any {
  if (starType === StarType.Gold) {
    return [<Image source={images.goldSmall} key="g1" />, <Image source={images.goldSmall} key="g2" />, <Image source={images.goldSmall} key="g3" />]
  }
  if (starType === StarType.Silver) {
    return [<Image source={images.silverSmall} key="s1" />, <Image source={images.silverSmall} key="s2" />]
  }
  if (starType === StarType.Bronze) return <Image source={images.bronzeSmall} />
}

function moves(n: any) {
  return n === 1 ? "1 move" : n + " moves";
}

interface PuzzleListProps { navigation: any }

export default class PuzzleList extends React.Component<PuzzleListProps> {
  static navigationOptions = ({ navigation }: any) => {
    return {
      title: navigation.state.params.title
    }
  };

  constructor(props: PuzzleListProps) {
    super(props);
    this.state = {
      lastUpdated: new Date()
    }
  }

  update() {
    this.setState({ lastUpdated: new Date() });
  }

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
                <View style={{ position: "absolute", right: 0, top: "50%", flexDirection: "row" }}>
                  {getStarImages(solution.starType)}
                </View>
              </View>}
              subtitle={isSolved ? `Solved in ${moves(solution.moveCount)}. ` + (isBest ? "" : `Try to solve in ${moves(solution.bestMoveCount)}.`) : "Not solved yet."}
              subtitleStyle={{fontSize: 13}}
              onPress={() => this.props.navigation.push("GameView", { groupTitle: title, puzzle, nextPuzzle, i, puzzles, onSolve: () => this.update() })} />
          })
        }
      </ScrollView>
    );
  }
}