import React from 'react';
import { Image } from 'react-native';
import { PieceType } from './../lib/Board';

const pieceImages: { [key: string]: any } = {
    [PieceType.Block]: require("../img/block.png"),
    [PieceType.Start]: require("../img/start.png"),
    [PieceType.Home]: require("../img/home.png"),
    [PieceType.Blank]: require("../img/blank.png")
}

export default class PieceView extends React.Component<{ pieceType: PieceType }> {
    render() {
        const { pieceType } = this.props;
        return <Image
            source={pieceImages[pieceType]}
            style={{
                width: "100%",
                height: "100%"
            }} />
    }
}