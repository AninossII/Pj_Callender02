import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function CalTItle({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default CalTItle;

const styles = StyleSheet.create({
    title: {
        fontSize: 50,        
        color: colors.title,
        paddingBottom: 10,
    }, 
})