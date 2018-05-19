import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoardView from './components/BoardView';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <BoardView />
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
