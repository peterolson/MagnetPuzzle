import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const panelImages = {
    undo: require("../img/undo.png"),
    reset: require("../img/reset.png")
}

interface ActionPanelProps {
    moveCount: number,
    isHorizontal: boolean,
    onUndo: () => void,
    onReset: () => void
}

export default class ActionPanel extends React.Component<ActionPanelProps> {
    render() {
        const { moveCount, isHorizontal, onUndo, onReset } = this.props;
        return <View style={{ flexDirection: isHorizontal ? "row" : "column", justifyContent: "center" }}>
            <TouchableOpacity style={styles.item} onPress={onReset}>
                <Image source={panelImages.reset}></Image>
                <Text style={styles.label}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={onUndo}>
                <Image source={panelImages.undo}></Image>
                <Text style={styles.label}>Undo</Text>
            </TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.moveCount}>{moveCount}</Text>
                <Text style={styles.label}>{moveCount === 1 ? "Move" : "Moves"}</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    item: {
        paddingTop: 10,
        borderRadius: 10,
        width: 64,
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontFamily: "sans-serif",
        fontSize: 15
    },
    moveCount: {
        height: 32,
        lineHeight: 32,
        fontSize: 25,
        fontWeight: "bold",
        alignItems: "center"
    }
});