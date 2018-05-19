import React from 'react';
import { View, Text } from 'react-native';

export default class SquareView extends React.Component<{width: number, isRight: boolean, isBottom: boolean}> {
    render() {
        const {width, isRight, isBottom} = this.props;
        return (<View style={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'black',
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: isRight ? 1 : 0,
            borderBottomWidth: isBottom ? 1 : 0,
            width,
            height: width
        }}>
            <Text>abc</Text>
        </View>);
    }
}