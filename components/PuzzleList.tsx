import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';

export default class PuzzleList extends React.Component<{navigation: any}> {
    static navigationOptions = ({ navigation } : any) => {
      return {
        title: navigation.state.params.title
      }
    };
    render() {
      const { navigation } = this.props;
      const group = navigation.getParam('group', 'learn');
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }