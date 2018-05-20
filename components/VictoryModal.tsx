import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import {Puzzle} from './../lib/Puzzles';

const images = {
    gold: require("../img/gold.png"),
    silver: require("../img/silver.png"),
    bronze: require("../img/bronze.png"),
    up: require("../img/up.png"),
    restart: require("../img/restart.png"),
    next: require("../img/next.png")
}

interface VictoryModalProps {
    isVisible: boolean,
    title: string,
    moveCount: number,
    goBack: () => void,
    puzzle: Puzzle,
    hide: () => void
}

export default class VictoryModal extends React.Component<VictoryModalProps> {
    render() {
        const { isVisible, hide, title, moveCount, goBack, puzzle } = this.props;
        console.log(goBack);
        return (
            <Modal isVisible={isVisible} scrollOffset={0} style={modalStyle} >
                <Text style={{ fontSize: 28, marginBottom: 5 }}>Congratulations!</Text>
                <Text style={subtitle}>You solved</Text>
                <Text style={[bold, subtitle]}>{title}</Text>
                <Text style={subtitle}> in </Text>
                <Text style={[bold, subtitle]}>{moveCount} {moveCount === 1 ? "move" : "moves"}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Image source={images.gold} />
                    <Image source={images.gold} />
                    <Image source={images.gold} />
                </View>
                <Text>You found the best solution!</Text>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={button} onPress={goBack}>
                        <Image style={image} source={images.up} />
                        <Text style={label}>Easy Puzzles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button} onPress={hide}>
                        <Image style={image} source={images.restart} />
                        <Text style={label}>Play again</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Image style={image} source={images.next} />
                        <Text style={label}>Next Puzzle</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const modalStyle: any = {
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    borderRadius: 25
}

const subtitle: any = {
    fontSize: 16,
    textAlign: "center"
}

const bold: any = {
    fontWeight: "bold"
}

const button: any = {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5
}

const image: any = {
    height: 75,
    width: 75
}

const label = {
    fontFamily: "sans-serif",
    fontSize: 15
}