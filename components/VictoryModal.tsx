import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal';

export default class VictoryModal extends React.Component<{isVisible: boolean, title: string, moveCount: number, hide: () => void}> {
    render() {
        const { isVisible, hide, title, moveCount } = this.props;
        return (
            <Modal isVisible={isVisible} scrollOffset={0} style={modalStyle} >
                <Text style={{ fontSize: 32, marginBottom: 5}}>Congratulations!</Text>
                <Text style={subtitle}>You solved</Text>
                <Text style={[bold, subtitle]}>{title}</Text>
                <Text style={subtitle}> in </Text>
                <Text style={[bold, subtitle]}>{moveCount} {moveCount === 1 ? "move" : "moves"}</Text>
                <TouchableHighlight onPress={hide}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </Modal>
        );
    }
}

const modalStyle : any = {
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 25,
    borderRadius: 25
}

const subtitle : any = {
    fontSize: 18, 
    textAlign: "center"
}

const bold : any = {
    fontWeight: "bold"
}