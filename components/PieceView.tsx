import React from 'react';
import { Image } from 'react-native';

let pieceImages : {[key: string] : any} = {
    B: require("../img/block.png"),
    S: require("../img/start.png"),
    H: require("../img/end.png"),
    "": require("../img/blank.png")
}

export default class PieceView extends React.Component<{pieceType: string}> {
    render() {
        const {pieceType} = this.props;
        return <Image
            source={pieceImages[pieceType]}
            style={{
                width: "100%",
                height: "100%"
            }}/>
    }
}