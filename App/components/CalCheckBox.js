import React, { useState } from "react";
import { StyleSheet, CheckBox, Text, View } from 'react-native';

import colors from "../config/colors";

function CalCheckBox({ title }){
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.checkboxContainer}>
          <CheckBox 
            value={isSelected}
            onValueChange={setSelection}            
            style={styles.checkbox}
            tintColors={{ true: colors.button, false: 'black' }}/>
          <Text style={styles.smalltext}>{title}</Text>
        </View>
    );
};

export default CalCheckBox;

const styles = StyleSheet.create({    
    checkboxContainer: {
        flexDirection: "row",   
        marginBottom: 10,

    },
    checkbox: {
        alignSelf: "center",        
    },
    smalltext: {
        fontSize:12,    
        marginTop: 7,        
    },
})