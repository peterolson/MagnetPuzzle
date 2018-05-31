import React from 'react';
import { Image } from 'react-native';
import { PieceType } from './../lib/Board';
import images from '../img/images';

export default class PieceView extends React.Component<{ pieceType: PieceType }> {
    render() {
        const { pieceType } = this.props;
        return <Image
            source={images[pieceType]}
            style={{
                width: "100%",
                height: "100%"
            }} />
    }
}