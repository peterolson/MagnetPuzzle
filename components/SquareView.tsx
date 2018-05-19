import React from 'react';
import { View } from 'react-native';
import PieceView from './PieceView';

interface SquareViewProps {
    width: number, 
    isRight: boolean, 
    isBottom: boolean, 
    pieceType: string,
    isActive: boolean,
    isPossibleMove: boolean,
    onTap: () => void
}

export default class SquareView extends React.Component<SquareViewProps> {
    render() {
        const {width, isRight, isBottom, pieceType, isActive, isPossibleMove, onTap} = this.props;
        return <View style={{
                borderWidth: 1,
                borderColor: 'gray',
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: isRight ? 1 : 0,
                borderBottomWidth: isBottom ? 1 : 0,
                backgroundColor: isActive ? 'blue' : isPossibleMove ? 'yellow' : 'white',
                width,
                height: width
            }}
            onTouchStart={onTap}>
            <PieceView pieceType={pieceType} />
        </View>;
    }
}