import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import PuzzleList from './components/PuzzleList';
import GameView from './components/GameView';
import { Button } from 'react-native-elements';
let {createStackNavigator} = require('react-navigation');
import images from './img/images';

let titles = {
  learn: "Learn to Play",
  easy: "Easy Puzzles",
  moderate: "Moderate Puzzles",
  hard: "Hard Puzzles",
  insane: "Insane Puzzles"
}

class HomeScreen extends React.Component<{navigation: any}> {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: "row", width: "100%", height: 75 }}>
          <Image source={images.logo} style={{flex: 1, width: undefined, height: undefined}} resizeMode="contain" />
        </View>
        <Button title={titles.learn} buttonStyle={[styles.button, {backgroundColor: "#88f"}]} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "learn", title: titles.learn})} />
        <Button  title={titles.easy} buttonStyle={[styles.button, {backgroundColor: "#8a8"}]} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "easy", title: titles.easy})} />
        <Button title={titles.moderate} buttonStyle={[styles.button, {backgroundColor: "#ff9"}]} color="#000"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "moderate", title: titles.moderate})} />
        <Button title={titles.hard} buttonStyle={[styles.button, {backgroundColor: "#800"}]} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "hard", title: titles.hard})} />
        <Button title={titles.insane} buttonStyle={styles.button} color="#FFF"
          onPress={() => this.props.navigation.navigate("PuzzleList", {group: "insane", title: titles.insane})} />
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