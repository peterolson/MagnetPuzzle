import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoardView from './components/BoardView';
import Board from './lib/Board';

let mediumBoard = new Board([
  "B B H",
  "     ",
  "H S S",
  "     ",
  "S H B"
]);

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <BoardView board={mediumBoard} />
        <Text>What's up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
