import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import colors from "../config/colors"

function CalButton({title, onPress, color="button"}){
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor:colors[color]}]}
            onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.button,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginBottom: 10,
    },
    text: {        
        color: colors.white,
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})

export default CalButton;