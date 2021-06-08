import React from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
} from "react-native";

import color from "../config/colors";
import CalButton from "../components/CalButton";
import CalInput from "../components/CalInput";
import CalIconButton from "../components/CalIconButton";
import CalCheckBox from "../components/CalCheckBox";
import CalPanel from "../components/CalPanel";
import CalLink from "../components/CalLink";
import CalTItle from "../components/CalTitle";

function LoginScreen(){

    return(
        <SafeAreaView style={[styles.container]}>
            <View style={{alignItems: 'center', alignContent: 'center',}}>                
                <CalTItle style={styles.title}>Sign In</CalTItle>
                
                <CalPanel>                    
                    <CalInput placeholder="Email or Username" />
                    <CalInput placeholder="Password" secureTextEntry={true} />

                    <CalButton title="Sign In"></CalButton>
                                        
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <CalCheckBox title="Remembet Me"/>
                            </View>
                            <View style={{flex: 1,}}>
                                <CalLink 
                                    marginTop={7} 
                                    color="black" 
                                    style={{ textAlign:'right'}} 
                                    fontSize={12} 
                                    onPress={()=> console.log("Hello world") }>
                                        Forgot your password!
                                </CalLink>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{alignItems: 'center'}}>
                        <View style={{alignItems: 'baseline'}}>
                            <CalIconButton title="Login with Google" source={require('../assets/google-icon.png')}/>
                            <CalIconButton title="Login with Facebook" source={require('../assets/facebook-icon.png')}/>
                        </View>
                    </View>

                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.smalltext, {paddingBottom: 20}]}>You don't have an Account? 
                            <CalLink style={{justifyContent: 'center'}} margin={10} >Sign up now. </CalLink>
                        </Text>                        
                    </View>

                </CalPanel>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;

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