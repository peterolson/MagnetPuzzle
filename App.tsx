import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import PuzzleList from './components/PuzzleList';
import GameView from './components/GameView';
import { Button } from 'react-native-elements';
let {createStackNavigator} = require('react-navigation');

let titles = {
  learn: "Learn to Play",
  easy: "Easy Puzzles",
  moderate: "Moderate Puzzles",
  hard: "Hard Puzzles"
}

class HomeScreen extends React.Component<{navigation: any}> {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", width: "100%", height: 75 }}>
          <Image source={require("./img/logo.png")} style={{flex: 1, width: undefined, height: undefined}} resizeMode="contain" />
        </View>
        <Button title={titles.learn} buttonStyle={styles.button} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "learn", title: titles.learn})} />
        <Button  title={titles.easy} buttonStyle={styles.button} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "easy", title: titles.easy})} />
        <Button title={titles.moderate} buttonStyle={styles.button} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "moderate", title: titles.moderate})} />
        <Button title={titles.hard} buttonStyle={styles.button} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "hard", title: titles.hard})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    borderRadius: 20,
    margin: 5,
    backgroundColor: "#232323"
  },
});

const RootStack = createStackNavigator({
  Home: HomeScreen,
  PuzzleList: PuzzleList,
  GameView: GameView
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#232323'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}