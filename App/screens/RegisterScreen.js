import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Platform
} from "react-native";

import LoginScreen from "./LoginScreen";
import color from "../config/colors";
import CalButton from "../components/CalButton";
import CalInput from "../components/CalInput";
import CalIconButton from "../components/CalIconButton";
import CalCheckBox from "../components/CalCheckBox";
import CalPanel from "../components/CalPanel";
import CalLink from "../components/CalLink";
import CalTItle from "../components/CalTitle";

function RegisterScreen(){
   
    return(
        <SafeAreaView style={[styles.container]}>
            <View style={{alignItems: 'center', alignContent: 'center',}}>      

                <CalTItle style={styles.title}> Sign up </CalTItle>
                
                <CalPanel>                    
                    <CalInput placeholder="Username" />
                    <CalInput placeholder="Email" />
                    <CalInput placeholder="Password" />
                    <CalInput placeholder="Password" />

                    <CalButton title="Sign Up"></CalButton>                            
                   
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.smalltext, {paddingBottom: 20}]}>Do you alredy have an Acount? 
                            <CalLink style={{justifyContent: 'center'}} margin={10} >Sign-in</CalLink>
                        </Text>                        
                    </View>
        
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.smalltext}>By cliking "Sing UP" below, tou agree to the</Text>                        
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.smalltext, {paddingBottom: 20}]}>
                            <CalLink style={{justifyContent: 'center'}}>Terms of Service </CalLink>
                            and 
                            <CalLink style={{justifyContent: 'center'}}> Privacy Policy.</CalLink>                            
                        </Text>                        
                    </View>

                </CalPanel>
            </View>
        </SafeAreaView>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,        
        justifyContent: 'center',       
        padding: 16,
    }, 
    
    smalltext: {
        fontSize:10,        
    },
})  