import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Puzzle } from './../lib/Puzzles';
import { StarType, addSolution, getStarType } from './../lib/SolutionStore';
import { GameParams } from './GameView';
import images from '../img/images';

interface VictoryModalProps {
    isVisible: boolean,
    gameParams: GameParams,
    moveCount: number,
    goBack: () => void,
    goNextPuzzle: () => void,
    hide: () => void
}

export default class VictoryModal extends React.Component<VictoryModalProps> {
    getStarImages(moveCount: number, bestMoveCount: number) {
        let starType = getStarType(moveCount, bestMoveCount);
        if (starType === StarType.Gold) {
            return [<Image style={starIamge} source={images.gold} key="g1" />,
            <Image style={starIamge} source={images.gold} key="g2" />,
            <Image style={starIamge} source={images.gold} key="g3" />]
        }
        if (starType === StarType.Silver) {
            return [<Image style={starIamge} source={images.silver} key="s1" />,
            <Image style={starIamge} source={images.silver} key="s2" />];
        }
        return <Image style={starIamge} source={images.bronze} />
    }

    render() {
        const { isVisible, hide, gameParams, moveCount, goBack, goNextPuzzle } = this.props;
        let name = String(gameParams.puzzle.name);
        let bestMoveCount = gameParams.puzzle.moves;
        if (!isVisible) return <View />;
        return (
            <View style={backgroundStyle}>
                <View style={modalStyle} >
                    <Text style={{ fontSize: 28, marginBottom: 5 }}>Congratulations!</Text>
                    <Text style={subtitle}>You solved <Text style={bold}>{name}</Text></Text>
                    <Text style={subtitle}>in <Text style={bold}>{moveCount} {moveCount === 1 ? "move" : "moves"}</Text></Text>
                    <View style={{ flexDirection: "row" }}>
                        {this.getStarImages(moveCount, bestMoveCount)}
                    </View>
                    <Text>{moveCount <= bestMoveCount ? "You found the shortest solution!" : `This puzzle can be solved in ${bestMoveCount} moves.`}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={button} onPress={goBack}>
                            <Image style={image} source={images.up} />
                            <Text style={label}>{gameParams.groupTitle}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button} onPress={hide}>
                            <Image style={image} source={images.restart} />
                            <Text style={label}>Play again</Text>
                        </TouchableOpacity>
                        {
                            (() => {
                                if (!gameParams.nextPuzzle) return;
                                return <TouchableOpacity style={button} onPress={goNextPuzzle}>
                                    <Image style={image} source={images.next} />
                                    <Text style={label}>Next Puzzle</Text>
                                </TouchableOpacity>
                            })()
                        }
                    </View>
                </View>
            </View>
        );
    }
}

const backgroundStyle : any = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
}

const modalStyle: any = {
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    borderWidth: 1,
    opacity: 1,
    zIndex: 999
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
    height: 65,
    width: 65
}

const starIamge: any = {
    height: 40,
    width: 40
}

const label = {
    fontFamily: "sans-serif",
    fontSize: 15
}