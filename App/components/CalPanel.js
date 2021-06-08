import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

function CalPanel({children}){
    return(
        <View style={styles.loginpanel}>
            {children}
        </View>
    );
}

export default CalPanel;

const styles = StyleSheet.create({
    loginpanel: {
        backgroundColor: colors.secondary,        
        borderRadius:10,
        justifyContent: 'center',      
        alignContent: 'center',
        width: "100%",
        padding: 10,
    },
})





