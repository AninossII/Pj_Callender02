import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function CalIconButton({title, source}){
    return (
        <View style={{ justifyContent: "center",}}>
            <TouchableOpacity style={styles.iconbuttons}>
                <Image style={styles.icon} source={source} />                
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CalIconButton;

const styles = StyleSheet.create({
    iconbuttons:{
        flexDirection: "row",
        marginBottom: 10,
    },
    icon:{        
        width: 27,
        height: 27,
    },   
    text:{
        color: colors.black,
        margin:5,           
    },
})
