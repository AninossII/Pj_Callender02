import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function CalLink({children, onPress, color="#FFC953", fontSize=13, marginTop }){
    return(
        <TouchableOpacity onPress={onPress} style={{ justifyContent:'center' }}>
            <Text style={{color: color, fontSize: fontSize, marginTop:marginTop}}>{children} </Text>
        </TouchableOpacity>
    );
}

export default CalLink;
