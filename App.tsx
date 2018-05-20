import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import GameView from './components/GameView';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{height: StatusBar.currentHeight }}></View>
        <GameView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
