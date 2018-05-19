import React from 'react';
import { View } from 'react-native';
import PieceView from './PieceView';

export default class SquareView extends React.Component<{width: number, isRight: boolean, isBottom: boolean, pieceType: string}> {
    render() {
        const {width, isRight, isBottom, pieceType} = this.props;
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
            <PieceView pieceType={pieceType} />
        </View>);
    }
}