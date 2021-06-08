import React from "react";
import { TextInput, StyleSheet } from "react-native";

import colors from "../config/colors";

function CalInput({ placeholder, secureTextEntry=false }){
    return (
        <TextInput style={styles.inpute} placeholder={placeholder} secureTextEntry={secureTextEntry}/>        
    );
}

const styles = StyleSheet.create({
    inpute: {
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
        margin: 10,
    },
    text:{

    },
})

export default CalInput;